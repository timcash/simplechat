import * as display from './display.js';
import * as actions from './actions.js';
import { connect }  from 'react-redux';

// ===================================================
//
//                    CONTAINERS
//
// ===================================================

const stateToPropsListContainer = ({messages}) => {
    return { messages };
};

export const messageListContainer = connect(
    stateToPropsListContainer,
    null
)(display.messageList);


const stateToPropsLoginForm = ({username, password}) => {
    return {username, password};
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
