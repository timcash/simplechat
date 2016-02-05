import L             from 'lodash/fp';
import react, { Component } from 'react';
import {render}      from 'react-dom';
import h             from 'react-hyperscript';
import redux         from 'redux';
import * as stypes   from './stypes.js';

let s = {
    color:"green"
};

const usernameInput = () => {
    return h('input');
};

const passwordInput = () => {
    return h('input');
};

const loginButton = (args) => {
    return h('div', {'onClick':args.doit}, 'Login');
};

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h('h1', {style:s}, 'hello from react'),
            h(usernameInput),
            h(passwordInput),
            h(loginButton, {doit:(e)=>{
                console.log("login");
            }})
        ]);
    }
}

setInterval(()=>{
    _Socket.emit(stypes.ADD_MSG, "a message");
}, 1000);

_Socket.on(stypes.REPEAT_MSG, (msg)=>{
    console.log(msg);
});

render(h(ChatApp), document.getElementById('root'));
