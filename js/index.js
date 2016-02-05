// ===================================================
//
//                    IMPORTS
//
// ===================================================

import { Component }            from 'react';
import L                        from 'lodash/fp';
import { render }               from 'react-dom';
import { Provider }             from 'react-redux';
import redux                    from 'redux';
import { createStore }          from 'redux';
import h                        from 'react-hyperscript';
import * as stypes              from './stypes.js';
import * as displays            from './display.js';
import * as containers          from './containers.js';

// ===================================================
//
//                    LOGIC
//
// ===================================================

const r = (s, a) => {
    return {messages:['one', 'two', 'three']};
};

let s = {
    color:"green"
};

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h('h1', {style:s}, 'hello from react'),
            h(displays.usernameInput),
            h(displays.passwordInput),
            h(displays.loginButton, {onClick:(e)=>{
                console.log("login");
            }}),
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

let store = createStore(r);

render(
  h(Provider, {store}, [h(ChatApp)]),
  document.getElementById('root')
);
