const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(path.join(__dirname, './protos/products.proto'));
const productsProto = grpc.loadPackageDefinition(packageDefinition);

const fs = require("fs");
const { Pool } = require('pg');

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
    const result = await client.query('SELECT * FROM book');
    client.release();
    const books = result.rows;
    if (result) {
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