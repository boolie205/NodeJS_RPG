// webserver using socket.io and express.js. Hope you're confused robin.  Imma try explain it in comments I'd reccomend googling express real fast
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

 
app.use(express.static(__dirname + '/node_modules')); // dont worry about this either, i just have to actually tell express where node modules folder is because express is stupid and autistically needs everything layed out for it. reee routing. 


app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html'); // this is to serve the static HTML index file. Which will contain our canvas. ezpz. 
});

server.listen(4200);  // just setting the port. it can be anything.  4200 is arbitrary. k robin?

// this is basically what will recieve the 'announcement' that the client makes when it connects. IO.on constantly listens for connections. 
io.on('connection', function(client){
    console.log('Player Connected... ');

    client.on('join', function(data){
   console.log(data); 
   //this is sending a message back
   client.emit('messages', 'Hello from server');
    });
});


