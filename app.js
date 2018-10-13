const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Creature = require('./game-data/creatures/creature.js');
const Player = require('./game-data/creatures/player.js');
const Monster = require('./game-data/creatures/monster.js');
const Npc = require('./game-data/creatures/npc.js');

var players = [];

app.get('/', function(req, res) {  
	res.sendFile(__dirname + '/index.html');
});

app.get('/resources/:resource_type/:resource_name', function(req, res) {
	res.sendFile(__dirname + '/resources/' + req.params.resource_type + '/' + req.params.resource_name);
});

app.get('/resources/UI/img/:resource_name', function(req, res) {
	res.sendFile(__dirname + '/resources/UI/img/' + req.params.resource_name);
});

app.get('/resources/UI/img/:fuckit/:resource_name', function(req, res) {
	res.sendFile(__dirname + '/resources/UI/img/' + req.params.fuckit + '/' + req.params.resource_name);
});

io.on('connection', function(client) {
	client.player = new Player(0x400000 + Object.keys(players).length);
	players[client.player.getId() - 0x400000] = client.player;
	console.log('Player with id ' + client.player.getId() + ' connected.');

	client.on('disconnect', function(msg) {
		console.log('Player with id ' + client.player.getId() + ' disconnected.');
		if(players[client.player.getId() - 0x400000]) {
			delete players[client.player.getId() - 0x400000];
		}
	});

	client.on('message', function(msg) {
		io.emit('message', msg);
	});
});

server.listen(4200);