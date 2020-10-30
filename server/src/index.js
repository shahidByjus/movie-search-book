const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors =require('cors');
const { isEmpty } = require('lodash');
require('dotenv').config();

const app = express();
const port = 5000;
const url = process.env.MONGODB_URI;

console.log(url);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const connectDatabase = async (req,res) => {
    const client = await MongoClient.connect(url);

    global.nativeClient = client;
    console.log("Database is connected");
}

connectDatabase();

app.get('/:searchValue', async (req,res) => {
    const { searchValue } = req.params;
    const collection = nativeClient.db("data").collection("movies");
    const movies = await collection.find({title : searchValue}).toArray();
    
    res.send(movies);
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
