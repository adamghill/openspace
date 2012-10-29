var events = require('events');
var eventEmitter = new events.EventEmitter();
var db = {};

function get(key) {
	if (db[key]) {
		eventEmitter.emit('onGet', db[key]);
	} else {
		eventEmitter.emit('onError', new Error('Key is not valid.'));
	}
}

function set(key, value) {
	if (db[key]) {
		// Update value
		db[key] = value;
		eventEmitter.emit('onUpdate', key);
	} else {
		// Create
		db[key] = value;
		eventEmitter.emit('onCreate', key);
	}
}

exports.get = get;
exports.set = set;
exports.eventEmitter = eventEmitter;