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

export const sendMessageInput = ({onEnterPress}) => {
    let input;
    return h('div', {}, h('input', {
        placeholder: 'type here',
        ref:(n)=>{
            input=n;
        },
        onKeyPress:(e)=>{
            if(e.key === 'Enter') {
                onEnterPress(input.value);
                input.value = '';
            }
        }
    }));
};

export const chatForm = ({visible, messages, onEnterPress}) => {
    let style = {
        'display': visible
    };

    return h('div', {style}, [
        h('h4', 'messages'),
        h(messageList, {messages}),
        h(sendMessageInput, {onEnterPress})
    ]);
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

export const loginForm = ({username, password, visible, onUserChange, onPasswordChange, onLoginClick}) => {
    let style = {
        'display': visible
    };

    return h('div', {style}, [
        h(usernameInput, {onChange:onUserChange}),
        h(passwordInput, {onChange:onPasswordChange}),
        h(loginButton,   {onClick:(e)=>{
            e.preventDefault();
            onLoginClick(username, password);
        }})
    ]);
};
