var db = require('./db/callbackDb');

// Callback hell
db.set('key1', 'value1', function(err) {
	if (err) throw err;

	db.set('key2', 'value2', function(err) {
		if (err) throw err;

		db.set('key3', 'value3', function(err) {
			if (err) throw err;

			var str = '';
			db.get('key1', function(err, value) {
				if (err) throw err;
				str += value + ' - ';

				db.get('key2', function(err, value) {
					if (err) throw err;
					str += value + ' - ';

					db.get('key3', function(err, value) {
						if (err) throw err;
						str += value + ' - ';

						console.log(str);
					});
				});
			});
		});
	});
});