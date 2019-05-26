var express = require("express");
var socket = require("socket.io");
const server = require("http").Server(app);

var app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "src/server/index.js");
});
app.use(express.static(`${__dirname}/../build`));

PORT = process.env || 8080;

server = app.listen(8080, function() {
  console.log("server is running on port 8080");
});

io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
