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

db.eventEmitter.on('onSet', function(key) {
    db.get(key);
});

db.eventEmitter.on('onError', function(err) {
    throw err;
});

db.set('key1', 'value1');
db.set('key2', 'value2');
db.set('key3', 'value3');