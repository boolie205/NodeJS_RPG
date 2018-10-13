const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', function(req, res,next) {  
	res.sendFile(__dirname + '/index.html');
});

server.listen(4200);

io.on('connection', function(client){
	console.log('Player Connected... ');

	client.on('join', function(data){
		console.log(data); 
		client.emit('messages', 'Hello from server');
	});
});


