import assert from 'assert';
import * as Act from '../js/actions.js';
import * as Red from '../js/reducers.js';
import * as stypes from '../js/stypes.js';

describe('Redux Tests', function() {
    describe('Actions', function() {
        it('addMessage matches the format', function() {
            let action = Act.addMessage('batman');
            let match = {
                type: stypes.ADD_MSG,
                message: 'batman'
            };

            assert.deepEqual(action, match);
        });

        it('authRequest matches the format', function() {
            let action = Act.authRequest('carlsagan', 'guest');
            let match = {
                type: stypes.AUTH_REQ,
                username: 'carlsagan',
                hash: 'guest',
            };

            assert.deepEqual(action, match);
        });

        it('authReply matches the format', function() {
            let action = Act.authResponse('AACVX-133443-FFFF');
            let match = {
                type: stypes.AUTH_RESP,
                token: 'AACVX-133443-FFFF'
            };
            assert.deepEqual(action, match);
        });

        it('repeatMessage matches the format', function() {
            let action = Act.repeatMessage('carlsagan', 'billions and billions');
            let match = {
                type: stypes.REPEAT_MSG,
                author: 'carlsagan',
                message: 'billions and billions',
            };
            assert.deepEqual(action, match);
        });
    });

    describe('Reducers', function() {

        it('authRequest changes the auth state to authing', function() {
            let act = Act.authRequest('carlsagan', 'guest');
            let state = Red.authRequest({
                'messages': [],
                'authed': 'deauthed'
            }, act);
            let match = {
                'messages': [],
                'authed': 'authing'
            };

            assert.deepEqual(state, match);
        });

        it('authReply changes the auth state to authed or failed', function() {

            assert.deepEqual(reduce, match);
        });

        it('repeatMessage appends the message to the state', function() {

            assert.deepEqual(reduce, match);
        });
    });

    describe('Display', function() {

        it('messageView has the correct format', function() {

            assert.deepEqual(ui, match);
        });

        it('messageList appends elements and has the correct format', function() {

            assert.deepEqual(ui, match);
        });

        it('loginButton changes colors when authing', function() {

            assert.deepEqual(ui, match);
        });
    });
});
