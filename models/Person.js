var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  firstname: String,




});

module.exports = mongoose.model('person', personSchema);
