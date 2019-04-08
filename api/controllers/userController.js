const User = require('../models/user');
const services = require('../service/auth');


async function signUp(req, res) {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(500).json({ error: "email must be unick" });
  } else {
    const newUser = new User({
      ...req.body,
      email: req.body.email,
      username: req.body.username,
      password: services.generateHash(req.body.password)
    });

    newUser.save()
      .then((user) => res.send(user))
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong while signing up."
        });
        res.send(error);
      });
  }
};

function login(req, res) {
  return res.status(200).json({ email: req.body.email, token: req.body.token, id: req.user.id });
}

function usersList(req, res) {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

function currentUser(req, res) {
  User.findById(req.user.id)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading user."
      });
    });
};

module.exports = {
  signUp,
  login,
  usersList,
  currentUser
}
