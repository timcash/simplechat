import express  from 'express';
import http     from 'http';

let app     = express();
let server  = http.Server(app);

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});
