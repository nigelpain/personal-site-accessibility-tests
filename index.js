// Run accessibility tests against pages on my personal website
'use strict';

var async = require('async');
var pa11y = require('pa11y');

// Create a test instance with some default options
var test = pa11y({

	// Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	}

});


// Use the async library to run multiple tests in series
async.series({

	// Test the home page
	home: test.run.bind(test, 'http://nigelpain.com/'),

	// Test the photography index page
	photography: test.run.bind(test, 'http://nigelpain.com/photography')

}, function(error, results) {
	if (error) {
		return console.error(error.message);
	}
	console.log(results.home);
	console.log(results.photography);
});
