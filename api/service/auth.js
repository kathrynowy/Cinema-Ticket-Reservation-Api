const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.generateToken = (id) => {
  const token = jwt.sign(
    {
      id,
      exp: Math.floor(Date.now() / 1000) + parseInt(360000000)
    },
    'mySecretKey');
  return `bearer ${token}`;
};

const saltRounds = 10;
exports.generateHash = password => bcrypt.hashSync(password, saltRounds);