const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 8080;


mongoose.plugin(toJson);

require('./api/utils/DataBaseUtils').setUpConnection();
require('./api/models/cinema');
require('./api/models/movie');
require('./api/models/session');
require('./api/models/hall');
require('./api/models/boughtTicket');
require('./api/models/user');
require('./api/models/selectedSeat');

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

server.listen(port);

const seatController = require('./api/controllers/seatController');

io.on('connection', function (socket) {
  console.log('Client connected...');

  socket.on('SEND_TOGGLES_SEAT_TO_SERVER', seat => {
    console.log(seat);
    seatController.selectSeat(seat)
      .then(toggledSeat => {
        socket.broadcast.emit('BOUGHT_SEAT', toggledSeat);
        socket.emit('TOGGLE_SEAT', toggledSeat);
      })
      .catch(err => console.log(err))
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

console.log('server started on: ' + port);
