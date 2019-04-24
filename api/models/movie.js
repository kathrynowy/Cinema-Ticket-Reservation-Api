const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    default: ''
  },
  img: String,
  description: {
    type: String,
    default: 'Description...'
  },
  runningTime: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
