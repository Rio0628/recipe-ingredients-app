const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/recipe-book', { useNewUrlParser: true })
        .catch(e => { console.log('Connection Error', e.message) })

const db = mongoose.connection;
module.exports = db;