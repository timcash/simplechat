// ===================================================
//
//                      HELPERS
//
// ===================================================

function authResponse(success, store) {
    return {success, store};
}

export function loginUser(username, store) {
    if(store[username]) {
        // this user is already logged in
        return authResponse(false, store);
    }

    store[username] = "loggedin";
    return authResponse(true, store);
}

export function removeUser(username, store) {
    delete store[username];
    return store;
}

export function auth(username, hash, store) {
    // check the password hash
    if(hash !== "guest") {
        return authResponse(false, store);
    }

    // is this user already logged in
    let resp = loginUser(username, store);
    if(resp.success === true) {
        return resp;
    }

    // default
    return authResponse(false, store);
};

export function addMessage(message, store) {

}
