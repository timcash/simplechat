import * as stypes from './stypes.js';

export const addMessage = (author, message) => {
    let m = {
        type: stypes.ADD_MSG,
        author: author,
        message: message
    };

    _Socket.emit(m.type, m);
    return m;
};

export const userChange = (user) => {
    return {
        type: stypes.USER_CHANGE,
        user: user
    };
};

export const passwordChange = (password) => {
    return {
        type: stypes.PASSWORD_CHANGE,
        password: password
    };
};

export const repeatMessage = (author, message) => {
    return {
        type: stypes.REPEAT_MSG,
        author: author,
        message: message
    };
};

export const authRequest = (username, hash) => {
    let m = {
        type: stypes.AUTH_REQ,
        username: username,
        hash: hash
    };

    _Socket.emit(m.type, m);
    return m;
};

export const authResponse = (token) => {
    return {
        type: stypes.AUTH_RESP,
        token: token
    };
};
