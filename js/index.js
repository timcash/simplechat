// ===================================================
//
//                    IMPORTS
//
// ===================================================

import { Component }            from 'react';
import L                        from 'lodash/fp';
import { render }               from 'react-dom';
import { Provider }             from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import h                        from 'react-hyperscript';
import * as stypes              from './stypes.js';
import * as displays            from './display.js';
import * as containers          from './containers.js';
import * as reducers            from './reducers.js';
import createLogger             from 'redux-logger';

const loggerMiddleware = createLogger();

// ===================================================
//
//                    SETUP
//
// ===================================================

let actionMap = {};
actionMap[stypes.PASSWORD_CHANGE]   = reducers.passwordChange;
actionMap[stypes.USER_CHANGE]       = reducers.userChange;

let store = createStore((s={messages:[]}, a)=>{
    if(actionMap[a.type]) return actionMap[a.type](s, a);
    return s;
}, applyMiddleware(loggerMiddleware));

let s = {
    color:"green"
};

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h('h3', {style:s}, 'SIMPLE CHAT'),
            h(containers.loginFormContainer),
            h(containers.messageListContainer)
        ]);
    }
}

// ===================================================
//
//                    WEBSOCKET
//
// ===================================================

setInterval(()=>{
    _Socket.emit(stypes.ADD_MSG, "a message");
}, 1000);

_Socket.on(stypes.REPEAT_MSG, (msg)=>{
    console.log(msg);
});

// ===================================================
//
//                    BEGIN APPLICATION
//
// ===================================================

render(
  h(Provider, {store}, [h(ChatApp)]),
  document.getElementById('root')
);
