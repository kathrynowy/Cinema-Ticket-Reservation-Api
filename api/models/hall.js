const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HallSchema = new Schema({
  cinemaId: { type: Schema.Types.ObjectId, ref: 'Cinema' },
  id: Schema.Types.ObjectId,
  hall: [
    {
      row: Number,
      amountOfSeats: Number,
      cost: Number
    }
  ]
});

module.exports = mongoose.model('Hall', HallSchema);