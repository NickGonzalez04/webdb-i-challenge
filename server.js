const express = require('express');

const AccountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);
//Test request 

server.get('/', (req,res)=> {
    res.status(200).json({message: "In there like swim wear"});
})

module.exports = server;