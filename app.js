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
    createUser(user){
        this.count++;
        this.users.push({...user, id: this.count});
        return this.users[this.count - 1];
    }
    getUserById(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return this.users[foundIndex];
    }
    getllUsers(){ 
        return [...this.users];
    }
    updateUser(id, newInfo){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        this.users[foundIndex] = {
            ...this.users[foundIndex],
            ...newInfo,
        };
        return this.users[foundIndex];
    }
    deleteUser(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        this.users.splice(foundIndex, 1);
        this.count--;
    }
}

const usersInstance = new Users(usersDB);

// CRUD for user / controller for user
// get all users
app.get("/users", (req, res) => {
    const data = usersInstance.getllUsers();
    res.status(200).send(data);
});
// get user by id
app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = usersInstance.getUserById(id);
    res.status(200).send(foundUser);
});
// add new user 
app.post("/users", (req, res) => {
    const {body} = req;
    const newUser = usersInstance.createUser(body);
    res.status(201).send(foundUser);
});
//update info for user by id
app.patch("/users/:id", (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const foundUser = usersInstance.updateUser(id, body);
    res.status(200).send(foundUser);
});
// delete user by id
app.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = usersInstance.deleteUser(id);
    res.status(200).send(foundUser);
});


module.exports = app;