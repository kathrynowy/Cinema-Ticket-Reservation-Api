const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },

  halls: [
    {
      id: String
    }
  ],
});


module.exports = mongoose.model('Cinema', CinemaSchema);
