const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({ 
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    }, { timestamps: true } );

module.exports = mongoose.model('recipes', Recipe)