const express = require('express');
const passport = require('passport');
const router = express.Router();

const UserController = require('../controllers/userController');

router.post('/signup', UserController.signUp);
router.post('/login', passport.authenticate('local-login', { session: false }), UserController.login);
router.get('/users', UserController.usersList);
router.post('/user/:id', passport.authenticate('jwt', { session: false }), UserController.currentUser);
router.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
