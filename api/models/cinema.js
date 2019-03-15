const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  halls: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Cinema', CinemaSchema);
