const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdditionalServiceSchema = new Schema({
  cinemaId: { type: Schema.Types.ObjectId, ref: 'Cinema' },
  services: [
    {
      name: String,
      cost: Number
    }
  ]
});

module.exports = mongoose.model('AdditionalService', AdditionalServiceSchema);
