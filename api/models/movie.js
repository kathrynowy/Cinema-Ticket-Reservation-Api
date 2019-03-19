const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },

  img: String,

  description: {
    type: String,
    default: 'Description...'
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
