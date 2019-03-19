const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdditionalServiceSchema = new Schema({
  cinemaId: String,
  services: [
    {
      name: String,
      cost: Number
    }
  ]
});

module.exports = mongoose.model('AdditionalService', AdditionalServiceSchema);
