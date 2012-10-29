var db = {};

function get(key, callback) {
	if (db[key]) {
		return callback(null, db[key]);
	} else {
		return callback(new Error('Key is not valid.'));
	}
}

function set(key, value, callback) {
	if (db[key]) {
		// Update value
		db[key] = value;
		return callback(null, key);
	} else {
		// Create
		db[key] = value;
		return callback(null, key);
	}
}

exports.get = get;
exports.set = set;