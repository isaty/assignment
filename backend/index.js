const express = require('express');
const database = require('./database/database');
const compound = require('./compoundModule/compoundController');
const app = express();
require('dotenv').config()
const cors = require('cors');

//initiating database connection
database.createConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/compound',compound);

app.listen(process.env.PORT,()=>{
    console.log("Listening at port", process.env.PORT);
})