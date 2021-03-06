const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoughtTicketSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  cinemaId: { type: Schema.Types.ObjectId, ref: 'Cinema' },
  movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
  hallId: { type: Schema.Types.ObjectId, ref: 'Hall' },
  time: Number,
  row: Number,
  seat: Number,
  cost: Number,
  selectedServices: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('BoughtTicket', BoughtTicketSchema);
