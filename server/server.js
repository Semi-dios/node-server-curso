require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/users', function(req, res) {
    res.send('get Users')
})

app.post('/users', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mjs: `El nombre es necesario`
        })
    } else {
        res.json({
            person: body
        });

    }
})

app.put('/users/: id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/users', function(req, res) {
    res.send('delete Users')
})



app.listen(process.env.PORT, () => console.log(`ESCUCHANDO PUERTO ${process.env.PORT}`));