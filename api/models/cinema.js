const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  id: Number,

  name: {
    type: String,
    required: true,
    default: ''
  },
  halls: [
    {
      id: Number
    }
  ]


});

module.exports = mongoose.model('Cinema', CinemaSchema);
