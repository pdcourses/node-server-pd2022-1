const express = require('express');

const app = express();

// db
const usersDB = [
    {
        id: 1,
        name: "John",
        surname: "Fox",
        isMale: true,
        age: 20
    },
    {
        id: 2,
        name: "Tom",
        surname: "Smith",
        isMale: true,
        age: 22
    },
    {
        id: 3,
        name: "Ann",
        surname: "Gran",
        isMale: false,
        age: 20
    }
];

class Users{
    constructor(users){
        this.users = [...users];
        this.count = users.length; //users[users.length -1].id + 1
    }
    createUser(user){}
    getUserById(id){}
    getllUsers(){ return [...this.users];}
    updateUser(id, newInfo){}
    deleteUser(id){}
}

const usersInstance = new Users(usersDB);

// CRUD for user / controller for user
// get all users
app.get("/users", (req, res) => {
    const data = usersInstance.getllUsers();
    res.status(200).send(data);
});

app.get("/users/1", (req, res) => {});
app.post("/users", (req, res) => {});
app.patch("/users/1", (req, res) => {});
app.delete("/users/1", (req, res) => {});


module.exports = app;