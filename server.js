const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');

mongoose.plugin(toJson);

const app = express();

require('./api/utils/DataBaseUtils').setUpConnection();
require('./api/models/cinema');
require('./api/models/movie');
require('./api/models/session');
require('./api/models/hall');
require('./api/models/boughtTicket');
require('./api/models/user');
require('./api/passport/index');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.use('/', require('./api/routes/index'));

app.use(passport.initialize());
app.use(passport.session());


app.use((error, req, res, next) => {
  if (error) {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  }
});

const port = 8080;
app.listen(port);

console.log('server started on: ' + port);
