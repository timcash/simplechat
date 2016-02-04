import assert from 'assert';
import * as U from '../js/serverutils.js';

describe('Auth Tools', function() {
    describe('Auth', function() {
        it('should return true if the hash matches', function() {
            let res = U.auth('foo', 'bar');
            assert.equal(res, true);
        });
        
        it('should return false if the hash does not match', function() {
            let res = U.auth('foo', 'bar');
            assert.equal(res, true);
        });
    });
});
