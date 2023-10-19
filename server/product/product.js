const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const options = { keepCase: true }
const packageDefinition = protoLoader.loadSync(path.join(__dirname, './protos/products.proto'), options);
const productsProto = grpc.loadPackageDefinition(packageDefinition);

const fs = require("fs");
const { Pool } = require('pg');
const Book = require('./book');

// Read the configuration file
const configFilePath = process.env.CONFIG_FILE_PATH 
const configData = fs.readFileSync(configFilePath, 'utf8');

// Parse the JSON configuration
const config = JSON.parse(configData);

// create a connection to db reader
const pool = new Pool({
    user: config.PG_USER,
    host: config.PG_HOST,
    database: config.PG_DB,
    password: config.PG_PASSWORD,
    port: config.PG_PORT
})

async function getBooks(_, callback) {
    const client = await pool.connect();
    const response = await client.query('\
        SELECT *\
        FROM book b \
        JOIN book_author ba \
        ON b.isbn = ba.isbn \
        JOIN author a \
        ON ba.author_id = a.author_id \
        LIMIT 20 \
        ');
    client.release();
    if (response) {
        const result = response.rows;
        // ensure book item is unique 
        /*
            loop through the array
            if book_id has not existed in the array: add,
            else, append the author details to the existing object
        */
        let books = {};
        for (const item of result) {
            if (item.isbn in books) {
                books[item.isbn].addAuthor(item.author_id, item.author_name);
            } else {
                books[item.isbn] = new Book(item.isbn, item.title);
                books[item.isbn].addAuthor(item.author_id, item.author_name);
            }
        }
        books = Object.values(books);
        callback(null, { books: books});
    }
    else {
        callback({
            message: 'Books not found',
            code: grpc.status.INTERNAL
        });
    }

}

const server = new grpc.Server();
server.addService(productsProto.Products.service, { GetBooks: getBooks });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});