const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.generateToken = (id) => {
  const token = jwt.sign(
    {
      id,
      expiresIn: '1d'
    },
    'mySecretKey');
  return `bearer ${token}`;
};

const saltRounds = 10;
exports.generateHash = password => bcrypt.hashSync(password, saltRounds);
