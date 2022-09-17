const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('request:', req);
    res.status(200).end();
});

app.post('/users', (req, res) => {
    const {body} = req;
    //const newUser = db.Users.createUser(body); // db[] 
    //res.status(201).send(newUser);
    res.status(201).send(body);
});

app.get('users/id', (req, res) => {
    // обращение к базе и взять юзера по номеру id
    res.status(200).send();
})

/*
GET http://127.0.0.1:5000/users HTTP/1.1

GET http://127.0.0.1:5000/users/10 HTTP/1.1
*/

/*
app.get('/users/id', (req, res) => {})
app.get('/users/', (req, res) => {})
app.post('/users/', (req, res) => {})
app.patch('/users/id', (req, res) => {})
app.delete('/users/id', (req, res) => {})
*/

module.exports = app;