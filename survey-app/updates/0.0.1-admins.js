/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', 'email': 'user@keystonejs.com', 'password': 'pass', 'isAdmin': true },
	],
	ModulePath: [
		{'name': 'Adoption & Digital Inclusion'},
		{'name': 'Infrastructure & Availability'}
	],
	Module: [
		{
			'name': 'Community Engagement', 
			'url': 'https://docs.google.com/forms/d/1bWtvQHzdR_yqXYTcoBqJUzJpWbBTqQPUojWAXlCg5hI/viewform?',
			'index': '1'
		},
		{
			'name': 'Broadband Access',
			'url': 'https://docs.google.com/forms/d/e/1FAIpQLSdjx7zHnmNu6jHNo8YyXEu-DwKbhmCA5Msl3VEKV65gbxsDcQ/viewform',
			'index': '6'
		},
		{
			'name': 'Provider Engagement',
			'url': 'https://docs.google.com/forms/d/e/1FAIpQLSf7nP5PmeRJu_8QZgtNyWKnHV3m3vmS-eBBP3aL_lpRRs11iA/viewform',
			'index': '7'
		},
		{
			'name': 'Use of Public Assets',
			'url': 'https://docs.google.com/forms/d/e/1FAIpQLSdL6yaZ-dmH0BDg8iPJso8wAuXcC6qYM1RylDmlXnBMhPzu4g/viewform',
			'index': '8'
		},
		{
			'name': 'Policy Environment',
			'url': 'https://docs.google.com/forms/d/e/1FAIpQLSeaOljEEz_yOtnR7zlu6JLyRqd4YXh-sHh17O9PGKkGrnAWYg/viewform',
			'index': '9'
		},
		{
			'name': 'Wrap-up',
			'url': 'https://docs.google.com/forms/d/1ApArAMb2pDCZdR3MJ8nbYodKg0-_0kwzE7guSQDbVtA/viewform',
			'index': '10'
		}
	]
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin (admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/
