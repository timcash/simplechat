import * as display from './display.js';
import * as actions from './actions.js';
import { connect }  from 'react-redux';

// ===================================================
//
//                    CONTAINERS
//
// ===================================================

const isLoginFormVisible = (token) => {
    if(token === 'failed') return 'visible';
    if(token === 'authing') return 'visible';
    if(token === 'deauthed') return 'visible';
    if(token === undefined) return 'visible';
    if(token === null) return 'visible';
    return 'hidden';
};

const stateToPropsListContainer = ({messages}) => {
    return { messages };
};

export const messageListContainer = connect(
    stateToPropsListContainer,
    null
)(display.messageList);


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
