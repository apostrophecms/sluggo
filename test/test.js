var assert = require("assert");
describe('sluggo', function() {
  var sluggo;
  it('should be successfully initialized', function() {
    sluggo = require('../sluggo.js');
    assert(sluggo);
  });
  it('slugifies a complex unicode string', function() {
    var s = sluggo('@ monkey\'s are elab؉؉orate fools##');
    assert.equal(s, 'monkey-s-are-elab-orate-fools');
  });
  it('slugifies a complex unicode string with allowed punctuation and a different separator', function() {
    var s = sluggo('@ monkey\'s are elab؉؉orate fools##', { separator: ',', allowed: '؉'});
    assert.equal(s, 'monkey,s,are,elab؉؉orate,fools');
  });
  it('behaves sensibly with existing slugs', function() {
    var s = sluggo('monkey-s-are-elab-orate-fools');
    assert.equal(s, 'monkey-s-are-elab-orate-fools');
  });
});
