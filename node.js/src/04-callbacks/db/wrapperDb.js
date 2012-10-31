var db = require('./callbackDb');

function setValues(keys, values, callback) {
	if (keys.length !== values.length) {
		return callback(new Error('Keys and values are not the same length.'));
	}

	var returnKeys = [];

	keys.forEach(function(key, idx) {
		db.set(key, values[idx], function(err, key) {
			if (err) return callback(err);
			returnKeys.push(key);

			if (returnKeys.length === keys.length) {
				return callback(null, returnKeys);
			}
		});
	});
}

function getValues(keys, callback) {
	var values = [];

	keys.forEach(function(key) {
		db.get(key, function(err, value) {
			if (err) return callback(err);

			values.push(value);

			if (values.length === keys.length) {
				return callback(null, values);
			}
		})
	});
}

exports.setValues = setValues;
exports.getValues = getValues;