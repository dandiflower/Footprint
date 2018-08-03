var mongoose = require('mongoose');

var UserDataSchema = new mongoose.Schema({
    firstName:  {
        type: String,
        require: true
    },
    zipCode: {
        type: String,
        require: true
    },
    q1: {
        type: Number,
        require: true
    },
    q2: {
        type: Number,
        require: true
    },
    q3: {
        type: String,
        require: true
    },
    q4: {
        type: String,
        require: true
    },
    q5: {
        type: Number,
        require: true
    },
    q6: {
        type: Number,
        require: true
    },
    q7: {
        type: String,
        require: true
    },
    q8: {
        type: Number,
        require: true
    },
    q9: {
        type: Number,
        require: true
    },
    q10: {
        type: Number,
        require: true
    },
    q11: {
        type: Number,
        require: true
    },
    q12: {
        type: Number,
        require: true
    },
    q13: {
        type: Number,
        require: true
    },
    q14: {
        type: Number,
        require: true
    },
    q15: {
        type: Number,
        require: true
    },
    q16: {
        type: Number,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('UserData', UserDataSchema);
