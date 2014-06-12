var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , path = require('path')
  , multer = require('multer')
  , io = require('socket.io')(server)
  , bodyParser = require('body-parser');

server.listen(process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'hjs');
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

var multerConfig = {
  dest: "./public/images/",
  onFileUploadComplete: function(file) {
    io.emit("new", { url: "/images/" + file.name });
  },
}

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", multer(multerConfig), function(req, res) {
    res.send(200);
});

