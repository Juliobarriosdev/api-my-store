const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
// const LocalStrategy = require('./strategies/jwt.strategy');
// const LocalStrategy = require('./strategies/twitter.strategy');

passport.use(LocalStrategy);