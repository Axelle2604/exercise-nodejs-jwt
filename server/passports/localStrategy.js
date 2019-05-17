const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = 
  new LocalStrategy(
    {
      //par défaut
      usernameField: 'username',
      passwordField: 'password',
    },
    (username, password, cb) => {
      try {
        return cb(null, { username: username, id: 0 }, { message: 'Success' });
      } catch (e) {
        console.error(e);
      }
    }
  )
