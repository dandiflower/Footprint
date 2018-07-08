var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  firstName: {
    type: String, 
    required: true
},
lastName: {
    type: String, 
    required: true
},
email: {
    type: String, 
    lowercase: true, 
    unique: true, 
   
    match: [/\S+@\S+\.\S+/, 'is invalid'], 
    index: true},
zipCode: {
    type: Number
},
numPeopleInHome: {
    type: Number
},
numVehicles: {
    type: Number
},
heatSource: {
    naturalGas: {
        type: Boolean,
        default: false
    },
    electricity: {
        type: Boolean,
        default: false  
    },
    fuelOil: {
        type: Boolean,
        default: false
    },
    propane: {
        type: Boolean,
        default: false
    } 
},
userId: {
  type: String,
  require: true
}

});

module.exports = mongoose.model('Book', BookSchema);
