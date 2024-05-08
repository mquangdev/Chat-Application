const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.ts");

const PORT = process.env.PORT || 5000;
const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: true,
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("New connection");
  console.log(getUser);
  socket.on("join", (data, callback) => {
    console.log(data);
    const error = true;
    if (error) {
      callback({ msg: "error" });
    }
  });
  socket.on("disconnect", () => {
    console.log("user left");
  });
});
app.use(router);

server.listen(PORT, () => console.log(`Server has started on ${PORT}`));
