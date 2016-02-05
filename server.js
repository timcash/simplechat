// ===================================================
//
//                      IMPORTS
//
// ===================================================

// so we only need to build the server.js file
// everything else will be transpiled at load time
import "babel-register";

import express from 'express';
import http from 'http';
import io from 'socket.io';
import * as U from './js/serverutils.js';
import * as stypes from './js/stypes.js';

// ===================================================
//
//                      SETUP
//
// ===================================================

let app = express();
app.use(express.static('.'));
let server = http.Server(app);
let socket = io(server);

// ===================================================
//
//                    CONNECT
//
// ===================================================


let user_store = {};

socket.on('connection', (conn) => {
    console.log(`connection ${conn.id}`);

    conn.on(stypes.ADD_MSG, (msg) => {
        socket.emit(stypes.REPEAT_MSG, msg);
    });

    conn.on(stypes.AUTH, (msg) => {
        let user    = msg.username;
        let hash    = msg.hash;
        let resp    = U.auth(user, hash, user_store);
        let authed  = resp.success;
        user_store  = resp.store;
        conn.emit(stypes.AUTH_RESP, {'authed':true});
    });

    conn.on('disconnect', () => {
        // TODO remove user from store so they can log in again
        console.log(`user disconnected ${conn.id}`);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

console.log("starting...");
