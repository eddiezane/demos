var express = require('express')
  , app     = express()
  , server  = require('http').createServer(app)
  , io      = require('socket.io').listen(server);

server.listen(3000); 

app.use(express.bodyParser());

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  io.sockets.emit('msg', {from: req.body.from, text: req.body.text});
  res.end();
});
