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

async function connectToDatabase() {
    try {
    await pool.connect();
        console.log('Connected to the PostgreSQL database!');
    } catch (error) {
        console.error('Error connecting to the PostgreSQL database:', error);
    }
}

// create a function that retrieves list of books from the database reader and table books and return an array of objects containing the book details
const getBooks = async () => {  

}

// just to keep container running. to be removed
const server = require("express")();

server.listen(3002, async () => { 
    console.log('Server is running on port 3002');
});

server.get("/", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM book');
        client.release();
        res.json({ "response": "connection established product from developer!", "DB": result.rows });
      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});