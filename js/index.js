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
import * as actions             from './actions.js';
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
actionMap[stypes.AUTH_RESP]         = reducers.authResponse;
actionMap[stypes.AUTH_REQ]          = reducers.authRquest;
actionMap[stypes.ADD_MSG]           = reducers.addMessage;
actionMap[stypes.REPEAT_MSG]        = reducers.repeatMessage;

let store = createStore((s={messages:[]}, a)=>{
    if(actionMap[a.type]) return actionMap[a.type](s, a);
    return s;
}, applyMiddleware(loggerMiddleware));

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h(containers.loginFormContainer),
            h(containers.chatFormContainer)
        ]);
    }
}

// ===================================================
//
//                    WEBSOCKET
//
// ===================================================

_Socket.on(stypes.REPEAT_MSG, (msg)=>{
    store.dispatch(msg);
});

_Socket.on(stypes.AUTH_RESP, (msg)=>{
    if(msg.token !== 'failed') {
        console.log(`AUTH: Token ${msg.token}`);
        store.dispatch(actions.authResponse(msg.token));
    }
    else {
        console.log(`AUTH: Failed to login`);
    }
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
