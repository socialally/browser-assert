var assert = require('assert')
  , expect = require('chai').expect;

describe('Assert:', function() {

  it('should fail false expression', function(done) {
    function fn() {
      assert(1 === 2, 'assertion failed');
    }
    expect(fn).throws(Error);
    expect(fn).throws(/assertion failed/);
    done();
  });

  it('should fail false expression w/ default message', function(done) {
    function fn() {
      assert(1 === 2);
    }
    expect(fn).throws(Error);
    expect(fn).throws(/unknown/);
    done();
  });

});
