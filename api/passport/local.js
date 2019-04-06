const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const services = require('../service/auth');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local-login', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, username, password, done) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        req.body.message = 'No user found';
        return done(null, false, { message: 'No user found' });
      }

      if (!user.validPassword(password)) {
        req.body.message = 'Wrong password';
        return done(null, false, { message: 'Wrong password' });
      }

      req.body.token = services.generateToken(user._id);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  async (req, email, password, done) => {
    try {
      const user = await User.findOne({ username: email });

      if (user) {
        return done(null, false);
      } else {
        const newUser = new User({
          ...req.body,
          username: req.body.email,
          password: services.generateHash(password)
        });

        await newUser.save()
          .then(() => {
            req.body.token = services.generateToken(newUser._id);
            req.body.username = newUser.username;
          })
          .catch(err => console.log(err));

        return done(null, newUser);
      }
    } catch (error) {
      done(null, error);
    }
  }
));