import express from 'express';
import http from 'http';
import io from 'socket.io';

let app = express();
app.use(express.static('.'));
let server = http.Server(app);
let socket = io(server);

socket.on('connection', function(conn) {
    console.log('a user connected');
    conn.on('disconnect', function() {
        console.log('user disconnected');
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});

console.log("starting...")
