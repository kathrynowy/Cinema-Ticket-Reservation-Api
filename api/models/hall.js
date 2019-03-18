const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HallSchema = new Schema({
  cinemaId: String,
  hallId: String,
  hall: [
    {
      row: Number,
      amountOfSeats: Number,
      cost: Number
    }
  ]
});

module.exports = mongoose.model('Hall', HallSchema);