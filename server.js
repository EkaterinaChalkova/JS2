const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(express.static('public'));

const jsonParser = bodyParser.json()


app.get('/catalog', (req, res) => {
    fs.readFile('./data/catalogData.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.post('/cart', jsonParser, (req, res) => {
    console.log(req.body)
    fs.writeFile('./data/cart.json', JSON.stringify(req.body), () => {
        res.end();
    })
})

app.listen(port, () => {
    console.log(`Shop is at http://localhost:${port}`)
})
