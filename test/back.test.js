import assert from 'assert';
import * as U from '../js/serverutils.js';

describe('Auth Tools', function() {
    describe('Auth', function() {

        it('should return true if the hash matches and the user is not logged in', function() {
            let res = U.auth('carlsagan', 'guest', {});
            assert.equal(res.success, true);
        });

        it('should return false if the hash does not match', function() {
            let res = U.auth('carlsagan', 'notaguest', {});
            assert.equal(res.success, false);
        });

        it('should return false if the user is already logged in', function() {
            let res = U.auth('carlsagan', 'guest', {'carlsagan':'loggedin'});
            assert.equal(res.success, false);
        });
    });
});
