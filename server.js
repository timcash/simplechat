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
import * as stypes  from './js/stypes.js';
import * as actions from './js/actions.js';
import moment       from 'moment';

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

const random = (low, high) => {
    return Math.random() * (high - low) + low;
};

const serverTimeMessage = (socket, store) => {
    console.log(`Sending server time to ${Object.keys(store).length} clients`);
    let t = moment().format('MMMM Do YYYY, h:mm:ss a');
    let m = actions.repeatMessage('server', `server time is ${t}`);
    socket.emit(m.type, m);
};

const beginServerTime = (socket, user_store) => {

    const sendATime = () => {
        serverTimeMessage(socket, user_store);
        let wait = random(300000,500000);
        console.log(`time to next servertime ${wait} ms`);
        setTimeout(()=>{
            sendATime();
        }, wait);
    };

    sendATime();
};

beginServerTime(socket, user_store);

socket.on('connection', (conn) => {
    console.log(`connection ${conn.id}`);

    conn.on(stypes.ADD_MSG, (msg) => {
        console.log(`got message: ${JSON.stringify(msg)}`);
        let m = actions.repeatMessage(msg.author, msg.message);
        socket.emit(m.type, m);
    });

    conn.on(stypes.AUTH_REQ, (msg) => {
        let user    = msg.username;
        let hash    = msg.hash;
        let resp    = U.auth(user, hash, user_store);
        let authed  = resp.success;
        user_store  = resp.store;
        if(authed) {
            conn.emit(stypes.AUTH_RESP, {'token':'FFFF-1111-AAAAA'});
        }
        else {
            conn.emit(stypes.AUTH_RESP, {'token':'failed'});
        }

        console.log(`AUTH ATTEMPTED ${user} ${hash}`);
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
