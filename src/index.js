const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Socket.io para todas as rotas e controllers
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(express.static(path.resolve(__dirname, "public")));

app.use(cors());
app.use(require("./routes"));

server.listen(3333);
