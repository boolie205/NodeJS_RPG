const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', function(req, res,next) {  
	res.sendFile(__dirname + '/index.html');
});

app.get('/resources/:resource_type/:resource_name', function(req, res) {
	res.sendFile(__dirname + '/resources/' + req.params.resource_type + '/' + req.params.resource_name);
});

io.on('connection', function(client) {
	console.log('Player Connected... ');

	client.on('join', function(data) {
		console.log(data); 
		client.emit('messages', 'Hello from server');
	});
});

server.listen(4200);