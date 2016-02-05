import h from 'react-hyperscript';

// ===================================================
//
//                    UI
//
// ===================================================

export const messageView = ({message}) => {
    return h('div', message);
};

export const messageList = ({messages}) => {
    let children = messages.map(m => h(messageView, {message:m}));
    return h('div', children);
};

export const sendMessageInput = ({onKeyPress}) => {
    return h('div', {}, h('input', {onKeyPress}));
};

export const usernameInput = ({onChange}) => {
    return h('div', {}, h('input', {onChange:()=>onChange(this.value)}));
};

export const passwordInput = ({onChange}) => {
    return h('div', {}, h('input', {onChange:()=>onChange(this.value)}));
};

export const loginButton = ({onClick, style}) => {
    return h('div', {onClick, style}, 'Login');
};

export const loginForm = ({onUserChange, onPasswordChange, onLoginClick}) => {
    return h('div', {}, [
        h(usernameInput, {onChange:onUserChange}),
        h(passwordInput, {onChange:onPasswordChange}),
        h(loginButton,   {onClick:onLoginClick})
    ]);
};
