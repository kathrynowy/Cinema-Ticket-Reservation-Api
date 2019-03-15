const mongoose = require('mongoose');
const Cinema = require('../models/cinema');
const config = require('../../config.json');

async function setUpConnection() {
  await mongoose.connect(`mongodb://${config.db[0].host}:${config.db[0].port}/${config.db[0].name}`);
  console.log('conn');
}

function listCinemas() {
  return Cinema.find();
}

function findByCinemaid(id) {
  return Cinema.findOne({ id });
}


module.exports = {
  setUpConnection,
  listCinemas,
  findByCinemaid
}