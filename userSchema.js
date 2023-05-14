let mongoose = require('mongoose');
let dbConnect = require('./dbConnect');
dbConnect();  //for creating connection between mongoose and node.js

let Schema = mongoose.Schema({
    imglink: {
        type: String,
        unique: false
    },
    name: {
        type: String,
        unique: false
    },
    brand:{
        type: String,
        unique: false
    },
    price:{
        type: Number,
        unique: false
    },
    cat:{
        type: String,
        unique: false
    }
});

module.exports = Schema;