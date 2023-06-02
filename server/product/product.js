
// create a function that retrieves list of books from the database reader and table books and return an array of objects containing the book details
const getBooks = async () => {

}

// just to keep container running. to be removed
const server = require("express")();

server.listen(3002, async () => { });

server.get("/test", async (_, response) => {
    response.json({ "response": "connection established product from developer!" });
});