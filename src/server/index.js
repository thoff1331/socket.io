const app = require("http").createServer();
const io = (module.exports.io = require("socket.io")(app));
const PORT = 3131;
const socketManager = require("./socketManager");

io.on("connection", socketManager);

app.listen(PORT, () => {
  console.log(`live on ${PORT}`);
});
