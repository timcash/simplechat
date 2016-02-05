'use strict';

require('babel-register');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _serverutils = require('./js/serverutils.js');

var U = _interopRequireWildcard(_serverutils);

var _stypes = require('./js/stypes.js');

var stypes = _interopRequireWildcard(_stypes);

var _actions = require('./js/actions.js');

var actions = _interopRequireWildcard(_actions);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===================================================
//
//                      SETUP
//
// ===================================================

// ===================================================
//
//                      IMPORTS
//
// ===================================================

// so we only need to build the server.js file
// everything else will be transpiled at load time
var app = (0, _express2.default)();
app.use(_express2.default.static('.'));
var server = _http2.default.Server(app);
var socket = (0, _socket2.default)(server);

// ===================================================
//
//                    CONNECT
//
// ===================================================
var user_store = {};

var random = function random(low, high) {
    return Math.random() * (high - low) + low;
};

var serverTimeMessage = function serverTimeMessage(socket, store) {
    console.log('Sending server time to ' + Object.keys(store).length + ' clients');
    var t = (0, _moment2.default)().format('MMMM Do YYYY, h:mm:ss a');
    var m = actions.repeatMessage('server', 'server time is ' + t);
    socket.emit(m.type, m);
};

var beginServerTime = function beginServerTime(socket, user_store) {

    var sendATime = function sendATime() {
        serverTimeMessage(socket, user_store);
        var wait = random(300000, 500000);
        console.log('time to next servertime ' + wait + ' ms');
        setTimeout(function () {
            sendATime();
        }, wait);
    };

    sendATime();
};

beginServerTime(socket, user_store);

socket.on('connection', function (conn) {
    console.log('connection ' + conn.id);

    conn.on(stypes.ADD_MSG, function (msg) {
        var m = actions.repeatMessage('author temp', msg.message);
        socket.emit(m.type, m);
    });

    conn.on(stypes.AUTH_REQ, function (msg) {
        var user = msg.username;
        var hash = msg.hash;
        var resp = U.auth(user, hash, user_store);
        var authed = resp.success;
        user_store = resp.store;
        if (authed) {
            conn.emit(stypes.AUTH_RESP, { 'token': 'FFFF-1111-AAAAA' });
        } else {
            conn.emit(stypes.AUTH_RESP, { 'token': 'failed' });
        }

        console.log('AUTH ATTEMPTED ' + user + ' ' + hash);
    });

    conn.on('disconnect', function () {
        // TODO remove user from store so they can log in again
        console.log('user disconnected ' + conn.id);
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
    console.log('listening on *:3000');
});

console.log("starting...");
