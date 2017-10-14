// requires the model with Passport-Local Mongoose plugged in
var user = require('./models/user'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
	// use static authenticate method of model in LocalStrategy
	passport.use(user.createStrategy());

	// use static serialize and deserialize of model for passport session support
	passport.serializeUser(user.serializeUser());
	passport.deserializeUser(user.deserializeUser());
};

// var User1 = require('./models/User1'),
// 	LocalStrategy = require('passport-local').Strategy;

// module.exports = function(passport){
// 	// use static authenticate method of model in LocalStrategy
// 	passport.use(User1.createStrategy());

// 	// use static serialize and deserialize of model for passport session support
// 	passport.serializeUser(User1.serializeUser());
// 	passport.deserializeUser(User1.deserializeUser());
// };
