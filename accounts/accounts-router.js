const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router()


// GET - for all data
router.get('/', (req, res) => {
    db.select('*').from('accounts')
    
    .then(accounts =>{
        res.status(200).json(accounts);
    })
    .catch(error =>{
        res.status(500).json(error);
    })
   });


// GET - request by ID    
   router.get('/:id', (req, res) => {
   // select * from posts where id = req.params.id
  db.select('*')
  .from('accounts')
  .where('id', '=', req.params.id)
  
  .then(account => {
    //Post request to client 
    res.status(200).json(account);
  })
  .catch(error => {
    //Handle Error 
    res.status(500).json(error);
   });
});
  
// POST - request 
   router.post('/', (req, res) => {
       const accountData = req.body;
   db('accounts')
   .insert(accountData, 'id')
   .then(ids => {
       res.status(200).json(ids);
   })
   .catch(error => {
       res.status(500).json(error);
   })
   });

   //PUT - Request 
   router.put('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      // remember to handle the error
      res.status(500).json(error);
    });
   });
   

   // DELETE REQUEST 
   router.delete('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      // remember to handle the error
      res.status(500).json(error);
    });
   });







module.exports = router;