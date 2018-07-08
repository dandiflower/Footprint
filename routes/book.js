const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book.js');
const passport = require('passport');
require('../config/passport')(passport);

/* GET ALL BOOKS */

router.post('/test', (req, res)=>{
  console.log("answers", req.body);
  Book.create(req.body, function (err, post) {
    if(err){
      res.status(400).send({success: true, msg: 'issue with data'});
    }
    res.status(200).send({success: true, msg: 'received data'});
  })
 
})

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Book.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* SAVE BOOK */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Book.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
