const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router()

router.get('/', (req, res) => {
    db.select('*').from('accounts')
    .then(accounts =>{
        res.status(200).json(accounts);
    })
    .catch(error =>{
        res.status(500).json(error);
    })
   });
   
   router.get('/:id', (req, res) => {
   // select * from posts where id = req.params.id
  db.select('*')
  .from('accounts')
  .where('id', '=', req.params.id)
  .first()
  .then(account => {
    // send the post to the client
    res.status(200).json(account);
  })
  .catch(error => {
    // remember to handle the error
    res.status(500).json(error);
   });
});
   
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
   
   router.put('/:id', (req, res) => {
   
   });
   
   router.delete('/:id', (req, res) => {
   
   });







module.exports = router;