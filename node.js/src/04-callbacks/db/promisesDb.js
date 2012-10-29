var db = require('./callbackDb');
var RSVP = require('rsvp');

var set = function(key, value) {
  var promise = new RSVP.Promise();

  db.set(key, value, function(err) {
    if (err) {
      promise.reject(err);
    } else {
      promise.resolve(key);
    }
  });

  return promise;
};

var get = function(key) {
  var promise = new RSVP.Promise();

  db.get(key, function(err, value) {
    if (err) {
      promise.reject(err);
    } else {
      promise.resolve(value);
    }
  });

  return promise;
};

exports.set = set;
exports.get = get;