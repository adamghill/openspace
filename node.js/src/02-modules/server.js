var path = require('path');

var one = require('./01');
var two = require(path.join(__dirname, '02'));
var three = require('./03');

console.log('Current directory:', __dirname);
console.log('01:', one.something());
console.log('02:', two.somethingElse());
console.log('03:', three.completelyDifferent());

// var util = require('util');
// console.log('Expose private functions?')
// try {
// 	console.log('Yes!', two.needsAnExport());
// } catch(err) {
// 	console.log('Nope.');
// } finally {
// 	// Do something else.
// 	console.dir(util.inspect(two));
// }

// npm install
// var request = require('request');
// request.get('http://www.fool.com', function (error, response, body) {
// 	if (!error && response.statusCode == 200) {
//     console.log(body.length);
//   }
// });

// npm install underscore
// var _ = require('underscore');
// var array = [0, 1, 2, 3, 4];
// var newArray = _.filter(array, function(a) {
// 	if (a % 2 === 0) {
// 		return a;
// 	}
// });
// console.log(newArray);
