const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  id: Schema.Types.ObjectId,
  cinemaId: { type: Schema.Types.ObjectId, ref: 'Cinema' },
  hallId: { type: Schema.Types.ObjectId, ref: 'Hall' },
  movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
  times: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Session', SessionSchema);
