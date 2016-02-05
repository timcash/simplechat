import h from 'react-hyperscript';

// ===================================================
//
//                    UI
//
// ===================================================

export const messageView = ({message}) => {
    return h('div.z-depth-1',
    {style:{margin:'5px', padding:'10px'}},
    `${message.author}: ${message.message}`);
};

export const messageList = ({messages}) => {
    let children = messages.map(m => h(messageView, {message:m}));
    return h('div',
        {style:{maxHeight:'400px', overflowY: 'scroll'}},
    children);
};

export const sendMessageInput = ({username, onEnterPress}) => {
    let input;
    return h('div', {}, h('input', {
        placeholder: 'type here',
        ref:(n)=>{
            input=n;
        },
        onKeyPress:(e)=>{
            if(e.key === 'Enter') {
                onEnterPress(username, input.value);
                input.value = '';
            }
        }
    }));
};

export const chatForm = ({visible, messages, username, onEnterPress}) => {
    let style = {
        'display': visible
    };

    return h('div', {style}, [
        h('h6', 'Messages:'),
        h(messageList, {messages}),
        h(sendMessageInput, {username, onEnterPress})
    ]);
};

export const usernameInput = ({onChange}) => {
    let input;
    return h('div.valign', {}, h('input', {
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
    return h('div.valign', {}, h('input', {
        placeholder: 'password is "guest"',
        ref:(n)=>{
            input=n;
        },
        onChange:()=>{
            onChange(input.value);
        }
    }));
};

export const loginButton = ({onClick, style}) => {
    return h('a.btn.orange.valign', {onClick, style}, 'Login');
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
