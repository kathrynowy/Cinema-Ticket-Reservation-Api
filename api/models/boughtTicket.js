const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoughtTicketSchema = new Schema({
  boughtTickets: [
    {
      cinemaId: String,
      movieId: String,
      hallId: String,
      time: Number,
      row: Number,
      seat: Number,
      cost: Number,
      selectedServices: Array
    }
  ]
});

module.exports = mongoose.model('BoughtTicket', BoughtTicketSchema);