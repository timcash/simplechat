import react, { Component }     from 'react';
import L                        from 'lodash/fp';
import {render}                 from 'react-dom';
import { Provider, connect }    from 'react-redux';
import redux                    from 'redux';
import { createStore }          from 'redux';
import h                        from 'react-hyperscript';
import * as stypes              from './stypes.js';

const r = (s, a) => {
    return {messages:['one', 'two', 'three']};
};

let store = createStore(r);

let s = {
    color:"green"
};

const messageView = (props) => {
    return h('div', {}, props.msg);
};

const messageList = (props) => {
    let children = props.messages.map(m => h(messageView, {msg:m}));
    return h('div', {}, children);
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id));
//         }
//     };
// };

const messageListContainer = connect(
    mapStateToProps,
    null
)(messageList);

const usernameInput = () => {
    return h('div', {}, h('input'));
};

const passwordInput = () => {
    return h('div', {}, h('input'));
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
            }}),
            h(messageListContainer)
        ]);
    }
}

setInterval(()=>{
    _Socket.emit(stypes.ADD_MSG, "a message");
}, 1000);

_Socket.on(stypes.REPEAT_MSG, (msg)=>{
    console.log(msg);
});

//render(h(ChatApp), document.getElementById('root'));

render(
  h(Provider, {store:store}, [h(ChatApp)]),
  document.getElementById('root')
);
