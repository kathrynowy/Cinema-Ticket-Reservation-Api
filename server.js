const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const errorHandlers = require('./api/errorHandlers/index');
const routes = require('./api/routes/index');
const cors = require('cors');

mongoose.plugin(toJson);



const app = express();
const db = require('./api/utils/DataBaseUtils').setUpConnection();
const Cinema = require('./api/models/cinema');
const Movie = require('./api/models/movie');
const Session = require('./api/models/session');
const Hall = require('./api/models/hall');
const AdditionalService = require('./api/models/additionalService');
const boughtTicket = require('./api/models/boughtTicket');


mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* 
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  if (res.statusCode == 200) {
    next(null, req, res);
  } else {
    next(error);
  }
})
 */
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

routes(app);

const port = 8080;
app.listen(port);

console.log('server started on: ' + port);
