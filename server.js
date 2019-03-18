const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/routes/index');

const app = express();
const db = require('./api/utils/DataBaseUtils').setUpConnection();

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

const port = 8080;
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
