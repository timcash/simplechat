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

export const sendMessageInput = () => {
    return h('div', {}, h('input'));
};

export const usernameInput = () => {
    return h('div', {}, h('input'));
};

export const passwordInput = () => {
    return h('div', {}, h('input'));
};

export const loginButton = ({onClick}) => {
    return h('div', {onClick}, 'Login');
};
