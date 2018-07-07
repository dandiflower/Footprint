const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const person = require('../models/person.js');
const passport = require('passport');
require('../config/passport')(passport);

/* GET ALL personS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    person.find(function (err, persons) {
      if (err) return next(err);
      res.json(persons);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* SAVE person */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    person.create(req.body, function (err, post) {
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
