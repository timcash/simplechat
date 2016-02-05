import * as display from './display.js';
import * as actions from './actions.js';
import { connect }  from 'react-redux';

// ===================================================
//
//                    CONTAINERS
//
// ===================================================

const isLoginFormVisible = (token) => {
    if(token === 'failed') return 'block';
    if(token === 'authing') return 'block';
    if(token === 'deauthed') return 'block';
    if(token === undefined) return 'block';
    if(token === null) return 'block';
    return 'none';
};

const isChatFormVisible = (token) => {
    if(isLoginFormVisible(token) === 'block') return 'none';
    return 'block';
};

const stateToPropsChatForm = ({messages, authed, username}) => {
    return { messages, visible:isChatFormVisible(authed), username};
};

const dispatchToPropsChatForm = (dispatch) => {
    return {
        onEnterPress: (username, value) => {
            dispatch(actions.addMessage(username, value));
        }
    };
};

export const chatFormContainer = connect(
    stateToPropsChatForm,
    dispatchToPropsChatForm
)(display.chatForm);

const stateToPropsLoginForm = ({username, password, authed}) => {
    return {username, password, visible:isLoginFormVisible(authed)};
};

const dispatchToPropsLoginForm = (dispatch) => {
    return {
        onUserChange: (value) => {
            dispatch(actions.userChange(value));
        },
        onPasswordChange: (value) => {
            dispatch(actions.passwordChange(value));
        },
        onLoginClick: (username, password) => {
            dispatch(actions.authRequest(username, password));
        }
    };
};

export const loginFormContainer = connect(
    stateToPropsLoginForm,
    dispatchToPropsLoginForm
)(display.loginForm);
