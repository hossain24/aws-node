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

app.use('/test-data', (req, res) => {
    const users = [
        { id: 1, firstName: "John", lastName: "Snow" },
        { id: 2, firstName: "Jason", lastName: "Hopkin" },
        { id: 3, firstName: "Jonson", lastName: "Kim" },
        { id: 4, firstName: "Josef", lastName: "Milford" },
        { id: 5, firstName: "Jacob", lastName: "Nilsen" }
    ];

    res.json(users);
});

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});