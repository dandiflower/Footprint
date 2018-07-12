var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");


router.post('api/auth/register', function(req, res) {
  
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  }
  
  else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
   
    // save the user
    newUser.save(function(err, data) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
     
      res.cookie("user", newUser["_id"] );
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          console.log("user",user['_id']);

          let userId = user["_id"];
          userId = JSON.stringify(userId);

          res.cookie("user",userId );
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.get('/logout', (req, res)=>{
  res.localStorage.removeItem('jwtToken');
  res.clearCookie("user", {path:"http://localhost:3000/"});
  res.set('user', {expires: Date.now()});
  res.json(true);
});

// router.post('/answers', (req, res)=>{
//   res.
// })

module.exports = router;
