var db = {};

function get(key, callback) {
	if (db[key]) {
		setTimeout(function() {
			return callback(null, db[key]);
		}, 10);
	} else {
		return callback(new Error('Key is not valid.'));
	}
}

function set(key, value, callback) {
	setTimeout(function() {
		db[key] = value;
		return callback(null, key);
	}, 100);
}

exports.get = get;
exports.set = set;