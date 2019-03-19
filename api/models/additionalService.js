const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdditionalServiceSchema = new Schema({
  cinemaId: String,
  services: [
    {
      name: Number,
      cost: Number
    }
  ]
});

module.exports = mongoose.model('AdditionalService', AdditionalServiceSchema);
