var db = require('./db/callbackDb');
var async = require('async');

// $ node install async
// https://github.com/caolan/async#series
// async.series([], callback)
async.series([
  function(callback) {
    db.set('key1', 'value1', function(err) {
    	callback(err);
    });
  },
  function(callback) {
    db.set('key2', 'value2', function(err) {
    	callback(err);
    });
  },
	function(callback) {
    db.set('key3', 'value3', function(err) {
    	callback(err);
    });
  },
  function(callback) {
    db.get('key1', function(err, value) {
    	callback(err, value);
    });
  },
  function(callback) {
    db.get('key2', function(err, value) {
    	callback(err, value);
    });
  },
  function(callback) {
    db.get('key3', function(err, value) {
    	callback(err, value);
    });
  }
],
function(err, results) {
	// results = [ undefined, undefined, undefined, 'value1', 'value2', 'value3' ]
	var str = '';

	results.forEach(function(result) {
		if (result) {
			str += result + ' - ';
		}
	});

	console.log(str);
});