const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SelectedSeatSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  cinemaId: String,
  movieId: String,
  hallId: String,
  time: Number,
  row: Number,
  seat: Number,
  cost: Number
});

module.exports = mongoose.model('SelectedSeat', SelectedSeatSchema);
