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
    let input;
    return h('div', {}, h('input', {
        placeholder: 'username',
        ref:(n)=>{
            input=n;
        },
        onChange:()=>{
            onChange(input.value);
        }
    }));
};

export const passwordInput = ({onChange}) => {
    let input;
    return h('div', {}, h('input', {
        placeholder: 'password',
        ref:(n)=>{
            input=n;
        },
        onChange:()=>{
            onChange(input.value);
        }
    }));
};

export const loginButton = ({onClick, style}) => {
    return h('a.waves-effect.waves-light.btn', {onClick, style}, 'Login');
};

export const loginForm = ({username, password, onUserChange, onPasswordChange, onLoginClick}) => {
    return h('div', {}, [
        h(usernameInput, {onChange:onUserChange}),
        h(passwordInput, {onChange:onPasswordChange}),
        h(loginButton,   {onClick:(e)=>{
            e.preventDefault();
            onLoginClick(username, password);
        }})
    ]);
};
