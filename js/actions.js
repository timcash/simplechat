import * as stypes  from './stypes.js';

export const addMessage = (message) => {
    return {
        type: stypes.ADD_MSG,
        message: message
    };
};
