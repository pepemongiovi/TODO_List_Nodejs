require("dotenv-safe").config({ path:'./.env' });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const usersRoutes = require('./api/routes/user');
const tasksRoutes = require('./api/routes/task');

const jwt = require('./api/helpers/jwt');
const errorHandler = require('./api/helpers/error-handler');
 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '130897',
  database: 'todo_list_db'
});

conn.connect((err) => {
    if(err) throw err;
    else console.log('Mysql Connected...');
});

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(jwt());

app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

app.use(errorHandler);

module.exports = app;