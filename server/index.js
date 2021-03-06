const express = require('express');
const cors = require('cors');
const db = require('./db');
const recipeRouter = require('./routes/recipe-router');
const app = express();
const apiPort = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB Connection Error: '))

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', recipeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`) )