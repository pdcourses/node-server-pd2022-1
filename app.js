const express = require('express');
const {userController} = require('./controllers');

const app = express();
app.use(express.json());

// users
app.get("/users", userController.getAllUsers);
app.get("/users/:id", userController.getUser);
app.post("/users", userController.createNewUser);
app.patch("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

module.exports = app;