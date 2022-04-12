/*********** WEB SERVER ************/
const express = require('express');
const app = express();

let port = process.env.PORT;
if (port === null || port === "") { // if on prod server, then run on the required port, otherwise run on 8000 test port
  port = 8000;
}
const server = app.listen(port);

app.use(express.static('public'));
console.log("Node server started...");

/*********** SOCKET ************/
const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

// called when a socket connects
function newConnection(socket) {
    console.log("connected to " + socket.id);


}