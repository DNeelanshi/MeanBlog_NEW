var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');
	
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://Dneelanshi:blithe123@ds155644.mlab.com:55644/dneel',
		port: process.env.PORT || 8080
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://Dneelanshi:blithe123@ds155644.mlab.com:55644/dneel' || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
		port: process.env.PORT || 80
	}
};