const mongoose = require('mongoose');
const config = require('../../config.json');

function setUpConnection() {
  mongoose.connect(/* `mongodb://${config.db[0].host}/${config.db[0].name}` */ `mongodb+srv://kathrynowy:katerina99@cluster0-lawht.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });
  return mongoose.connection;
}


module.exports = {
  setUpConnection
}