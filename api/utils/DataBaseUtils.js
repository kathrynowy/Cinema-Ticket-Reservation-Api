const connectionString = require('../../config').dbConnectionString;
const mongoose = require('mongoose');

function setUpConnection() {
  mongoose.connect(connectionString, { useNewUrlParser: true });
  return mongoose.connection;
}

module.exports = {
  setUpConnection
}
