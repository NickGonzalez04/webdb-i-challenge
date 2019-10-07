const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());


//Test request 

server.get('/', (req,res)=> {
    res.status(200).json({message: "In there like swim wear"});
})

module.exports = server;