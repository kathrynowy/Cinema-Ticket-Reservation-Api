const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  id: Schema.Types.ObjectId,
  city: {
    type: String,
    required: true,
    default: ''
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  additionalServices: [
    {
      name: String,
      cost: Number
    }
  ]
});


module.exports = mongoose.model('Cinema', CinemaSchema);
