var db = require('./db/callbackDb');

// Really naive.
db.set('key1', 'value1', function(err) {
});

db.set('key2', 'value2', function(err) {
});

db.set('key3', 'value3', function(err) {
});

var str = '';
db.get('key1', function(err, value) {
	str += value + ' - ';
});

db.get('key2', function(err, value) {
	str += value + ' - ';
});

db.get('key3', function(err, value) {
	str += value + ' - ';
});

console.log(str);