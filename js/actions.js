import * as stypes from './stypes.js';

export const addMessage = (message) => {
    return {
        type: stypes.ADD_MSG,
        message: message
    };
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
    return {
        type: stypes.AUTH_REQ,
        username: username,
        hash: hash
    };
};

export const authResponse = (token) => {
    return {
        type: stypes.AUTH_RESP,
        token: token
    };
};
