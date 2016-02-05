import L             from 'lodash/fp';
import react         from 'react';
import {render}      from 'react-dom';
import h             from 'react-hyperscript';
import redux         from 'redux';
import * as stypes   from './stypes.js';
const { Component } = react;

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h('h1', 'hello from react')
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
