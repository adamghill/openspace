var db = require('./db/promisesDb');

// $ node install rsvp
// https://github.com/tildeio/rsvp.js#basic-usage
db.set('key1', 'value1')
.then(db.set('key2', 'value2'))
.then(db.set('key3', 'value3'));

var str = '';
db.get('key1').then(function(value) {
  str += value + ' - ';
  return db.get('key2');
}).then(function(value) {
  str += value + ' - ';
  return db.get('key3');
}).then(function(value) {
  str += value + ' - ';
  console.log(str);
});