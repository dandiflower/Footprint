var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    user: {
        firstName:  {
            type: String,
            require: true
        },
        zipCode: {
            type: String,
            require: true
        },
        q1: {
            type: String,
            require: true
        },
        q2: {
            type: String,
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
            type: String,
            require: true
        },
        q6: {
            type: String,
            require: true
        },
        q7: {
            type: String,
            require: true
        },
        q8: {
            type: String,
            require: true
        },
        q9: {
            type: String,
            require: true
        },
        q10: {
            type: String,
            require: true
        },
        q11: {
            type: String,
            require: true
        },
        q12: {
            type: String,
            require: true
        },
        q13: {
            type: String,
            require: true
        },
        q14: {
            type: String,
            require: true
        },
        q15: {
            type: String,
            require: true
        },
        q16: {
            type: String,
            require: true
        },
        userId: {
            type: String,
            require: true
        }
    }
});

module.exports = mongoose.model('Person', PersonSchema);
