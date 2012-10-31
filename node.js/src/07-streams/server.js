var fs = require('fs')
	, request = require('request')
	;

// $ npm install request
// $ ls -la | grep map.png
request('http://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg').pipe(fs.createWriteStream('map.png'))