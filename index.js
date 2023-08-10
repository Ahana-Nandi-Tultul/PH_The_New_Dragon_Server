const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors())

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News Dragon is comming.')
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Listening port is: ${port}`)
})