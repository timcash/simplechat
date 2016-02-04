import L             from 'lodash/fp';
import react         from 'react';
import {render}      from 'react-dom';
import h             from 'react-hyperscript';
import redux         from 'redux';

const { Component } = react;

class ChatApp extends Component {
    render() {
        return h('div', {}, [
            h('h1', 'hello from react')
        ]);
    }
}

render(h(ChatApp), document.getElementById('root'));
