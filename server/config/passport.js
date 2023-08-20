const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/User');

exports.passportInit = () => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username });
        if (!user) return done(null, false);

        if (user.password !== password) return done(null, false);

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};