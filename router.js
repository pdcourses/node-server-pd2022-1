const {Router} = require('express');
const usersRouter = require('./routes/usersRouter');

const router = Router();

//users /api/users  http://127.0.0.1/api/users
router.use('/users', usersRouter);

//tasks
//router.use('/tasks', tasksRouter);

module.exports = router;