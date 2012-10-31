var events = require('events');
var eventEmitter = new events.EventEmitter();
var db = {};

function get(key) {
	if (db[key]) {
		setTimeout(function() {
			eventEmitter.emit('onGet', db[key]);
		}, 10);
	} else {
		eventEmitter.emit('onError', new Error('Key is not valid.'));
	}
}

function set(key, value) {
	setTimeout(function() {
		db[key] = value;
		eventEmitter.emit('onSet', key);
	}, 100);
}

exports.get = get;
exports.set = set;
exports.eventEmitter = eventEmitter;