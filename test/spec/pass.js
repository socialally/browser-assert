var assert = require('assert')
  , expect = require('chai').expect;

describe('Assert:', function() {

  it('should pass true expression', function(done) {
    assert(true);
    done();
  });

});
