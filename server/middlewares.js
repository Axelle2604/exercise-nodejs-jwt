const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const LocalStrategy = require('./passports/localStrategy');
const JwtStrategy = require('./passports/jwtStrategy');

module.exports = (app, passport) => {
  passport.use('local', LocalStrategy);
  passport.use('jwt', JwtStrategy);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use('/auth', loginRoute);
  app.use('/user', passport.authenticate('jwt', { session: false }), userRoute);
};
