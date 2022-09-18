const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log("requiest is ", req);
    res.status(200).send();
});

// CRUD for user / controller for user
app.get("/users", (req, res) => {});
app.get("/users/1", (req, res) => {});
app.post("/users", (req, res) => {});
app.patch("/users/1", (req, res) => {});
app.delete("/users/1", (req, res) => {});


module.exports = app;