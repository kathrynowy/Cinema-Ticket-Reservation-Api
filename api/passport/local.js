const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const services = require('../service/auth');


passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'No user found' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Wrong password' });
      }

      req.body.token = services.generateToken(user._id);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));
