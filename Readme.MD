server:
const http = require("http");
const app = require('./app');
const server = http.createServer(app);
server.listen(5000, "http://127.0.0.1");
//-------------------------------------------
const express = require("express");
const {userController} = require('./controllers');

const app = express();

// get all users
/*
user controller
module.exports.getAllUsers = (req, res) => {}
*/
app.get("/api/users", userController.getAllUsers);
app.get("/api/users/1", (req, res) => {});
app.post("/api/users", (req, res) => {});
app.patch("/api/users/1", (req, res) => {});
app.delete("/api/users/1", (req, res) => {});

app.get("/api/tasks", (req, res) => {});
app.get("/api/tasks/1", (req, res) => {});
app.post("/api/tasks", validate.checkNewUser, (req, res) => {});
app.patch("/api/tasks/1", validate.checkUpdatedUser, (req, res) => {});
app.delete("/api/tasks/1", (req, res) => {});


module.exports = app;

// data

Data base (array, sql, no-sql)
+
models

<=>

contontrollers

=> app



