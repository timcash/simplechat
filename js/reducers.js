export const authRequest = (state, action) => {
    return {
        ...state,
        authed:'authing'
    };
};

export const authResponse = (state, action) => {
    return {
        ...state,
        authed: action.token
    };
};

export const repeatMessage = (state = [], action) => {
    return {
        ...state,
        messages: [...state.messages, action.message]
    };
};

export const userChange = (state, action) => {
    return {
        ...state,
        username: action.user
    };
};

export const passwordChange = (state, action) => {
    return {
        ...state,
        password: action.password
    };
};
