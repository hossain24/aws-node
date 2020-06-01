const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router();
require('dotenv').config();

const app = express();

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.DB_URI;

// Router setup
const defaultData = require('./routes/default-data');
const testData = require('./routes/hard-coded-data');

app.use('/', defaultData);
app.use('/test-data', testData);

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});