const mongoose = require('mongoose');
const config = require('../../config.json');

function setUpConnection() {
  mongoose.connect(`mongodb://${config.db[0].host}/${config.db[0].name}`, { useNewUrlParser: true });
  return mongoose.connection;
}


module.exports = {
  setUpConnection
}