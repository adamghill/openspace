var db = require('./db/eventedDb');

var str = '';
var counter = 0;
db.eventEmitter.on('onGet', function(value) {
    str += value + ' - ';
    counter++;

    if (counter === 3) {
    	console.log(str);
  	}
});

db.eventEmitter.on('onCreate', function(key) {
    // console.log('create:', key);
});

db.eventEmitter.on('onUpdate', function(key) {
    // console.log('update:', key);
});

db.eventEmitter.on('onError', function(err) {
    throw err;
});

db.set('key1', 'value1');
db.set('key2', 'value2');
db.set('key3', 'value3');

db.get('key1');
db.get('key2');
db.get('key3');