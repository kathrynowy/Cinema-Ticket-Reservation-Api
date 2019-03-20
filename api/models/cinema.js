const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    default: ''
  },
  halls: [{ type: Schema.Types.ObjectId, ref: 'Hall' }],
});


module.exports = mongoose.model('Cinema', CinemaSchema);
