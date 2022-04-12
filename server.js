/**
 * A simple server which finds web-related suggestions for strings.
 * this file demonstrates a basic web server, socketio connections,
 * using modules, and async javascript
 * @author Nick Stames
 */

/*********** WEB SERVER ************/
// boilerplate code copied from https://socket.io/docs/v4/server-initialization/#with-express
const express = require('express');
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);

// if on heroku, then run on the required port, otherwise run on 8000 test port
let port = process.env.PORT;
if (port == null || port === "") {
    port = 8000;
}

// serve everything in the public folder statically
app.use(express.static('public'));

/*********** SOCKETS ************/
const { Server } = require("socket.io");
// listen for new socket connections via http
const io = new Server(httpServer);
const logic = require("./logic");

// called when a socket connects
io.sockets.on('connection', (socket => {
    console.log("connected to " + socket.id);

    socket.on("get-words", (word) => {
        if (typeof word !== "string") return; // not a string
        if (word.length < 2) return; // too short
        if (word.length > 50) return; // way too long

        console.log("getting suggestions for " + word);
        logic.findTopWords(word.toLowerCase(), 10).then(r => {
            socket.emit("words", r);
        });
    });
}));

// listen for new connections via http
httpServer.listen(port);
console.log("listening on port " + port);
