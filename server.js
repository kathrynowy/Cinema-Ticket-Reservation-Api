const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Cinema = require('./api/models/cinema');
const db = require('./api/utils/DataBaseUtils');

const app = express();
db.setUpConnection();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/index');
routes(app);



const port = 8080;
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
