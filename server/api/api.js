const express = require('express');
const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const app = express();
app.use(express.json());

const restPort = 5000;

// Load gRPC proto definition and create a gRPC client
const packageDefinition = protoLoader.loadSync(path.join(__dirname, './protos/products.proto'));
const productsProto = grpc.loadPackageDefinition(packageDefinition);
const productsStub = new productsProto.Products('product:50051',
                        grpc.credentials.createInsecure());

function getBooks() {
    return new Promise((resolve, reject) => {
        productsStub.getBooks({}, (err, books) => {
            if (err) {
                reject(err);
            } else {
                resolve(books);
            }
        });
    });
}

app.get('/books', async (req, res) => {
    try {
        const books = await getBooks();
        res.json(books);
    } catch (error) {
        console.error('Error while fetching books: ', error);
        res.status(500).json({ error: 'Failed to fetch books'});
    }
});

app.listen(restPort, () => {
    console.log(`API is listening on port ${restPort}`);
});