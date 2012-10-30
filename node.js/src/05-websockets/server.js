var fs = require('fs');
var os = require('os');
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
app.listen(8888);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html', function(err, file) {
    res.writeHead(200);
    res.end(file);
  });
}

io.sockets.on('connection', function(socket) {
	var timeoutId = 0;

	socket.on('start', function() {
		var sendData = function() {
			var data = {
				uptime: os.uptime(), 
				loadavg: os.loadavg()
			};
			
			socket.emit('data', data);
		};

		timeoutId = setInterval(sendData, 1000);
	});

	socket.on('stop', function() {
		clearTimeout(timeoutId);
	});
});