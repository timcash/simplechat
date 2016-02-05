import assert       from 'assert';
import * as Act     from '../js/actions.js';
import * as stypes  from '../js/stypes.js';

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

            assert.deepEqual(action, match);
        });

        it('authReply matches the format', function() {

            assert.deepEqual(action, match);
        });

        it('repeatMessage matches the format', function() {

            assert.deepEqual(action, match);
        });
    });

    describe('Reducers', function() {

        it('authRequest changes the auth state to waiting_for_auth', function() {

            assert.deepEqual(reduce, match);
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
