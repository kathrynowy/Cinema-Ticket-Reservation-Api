const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');

mongoose.plugin(toJson);

const routes = require('./api/routes/index');
const cors = require('cors');

const app = express();
const db = require('./api/utils/DataBaseUtils').setUpConnection();
const Cinema = require('./api/models/cinema');
const Movie = require('./api/models/movie');
const Session = require('./api/models/session');
const Hall = require('./api/models/hall');
const AdditionalService = require('./api/models/additionalService');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


routes(app);

const port = 8080;
app.listen(port);

console.log('server started on: ' + port);
