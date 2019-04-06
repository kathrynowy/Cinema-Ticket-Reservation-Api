const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');


function signUp(req, res) {
  return res.status(200).json({ username: req.body.email, token: req.body.token, id: req.body.id });
};

function login(req, res) {
  return res.status(200).json({ username: req.body.email, token: req.body.token, id: req.body.id });
}

function usersList(req, res) {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  signUp,
  login,
  usersList
}
