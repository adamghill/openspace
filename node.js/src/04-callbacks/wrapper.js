var db = require('./db/wrapperDb');

function concatValues(keys, callback) {
	db.getValues(keys, function(err, values) {
		if (err) return callback(err);

		var str = '';

		values.forEach(function(value) {
			str += value + ' - ';
		});

		return callback(null, str);
	})
}

db.setValues(['key1', 'key2', 'key3'], ['value1', 'value2', 'value3'], function(err, keys) {
	if (err) throw err;

	concatValues(keys, function(err, str) {
		if (err) throw err;

		console.log(str);
	});
});