const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  cinemaId: String,
  hallId: String,
  movieId: String,
  times: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Session', SessionSchema);
