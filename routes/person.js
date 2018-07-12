const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person.js');
const passport = require('passport');
require('../config/passport')(passport);



router.post('/results', (req, res)=>{
  Person.create(req.body, function (err, post) {
    if(err){
      console.log("err",err);
      res.json(false);
    }
    console.log("post", post);
   res.json(true);
  });
});


router.get('/results/:id', (req, res)=>{
  Person.findOne({userId:req.params.id})
  .then(dbResults =>{
    console.log("dbResults", dbResults);
    res.json(dbResults);
  })
  .catch(err=>{
    console.log("err", err);
  });
});

/* GET ALL Answers */

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Person.find(function (err, Persons) {
      if (err) return next(err);
      res.json(Persons);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* SAVE Answers */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    Person.create(req.body, function (err, post) {
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
