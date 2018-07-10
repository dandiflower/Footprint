var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
user:{
    firstName: "",
    zipCode: ""
},
questions:{
    q1: 0,
    q2: 0,
    q3: "",
    q4: "",
    q5: 0,
    q6: 0,
    q7: "",
    q8: 0,
    q9: 0,
    q10: 0,
    q11: 0,
    q12: 0,
    q13: 0,
    q14: 0,
    q15: 0
},
userId: {
  type: String,
  require: true
}

});

module.exports = mongoose.model('Person', PersonSchema);
