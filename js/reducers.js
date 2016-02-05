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
    return [...state, action.message];
};
