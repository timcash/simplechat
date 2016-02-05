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

socket.on('connection', function (conn) {
    console.log('connection ' + conn.id);

    conn.on(stypes.ADD_MSG, function (msg) {
        _socket2.default.emit(stypes.REPEAT_MSG, msg);
    });

    conn.on('disconnect', function () {
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
