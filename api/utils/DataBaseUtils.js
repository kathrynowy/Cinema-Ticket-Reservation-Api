const mongoose = require('mongoose');
const Cinema = require('../models/cinema');
const config = require('../../config.json');

function setUpConnection() {
  mongoose.connect(`mongodb://${config.db[0].host}:${config.db[0].port}/${config.db[0].name}`, { useNewUrlParser: true });
  console.log('conn');
}

function listCinemas() {
  return Cinema.find();
}

function findByCinemaId(id) {
  return Cinema.findById(id);
}


module.exports = {
  setUpConnection,
  listCinemas,
  findByCinemaId
}