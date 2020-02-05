/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { // check we're server-side
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}

test('parseWords first word - can parse the first word', function(assert) {
  var result = parseWords (words);
  var expected = 'acrobat';
  assert.deepEqual(result[0], expected);
});

test('spaces removed - second word is correct', function(assert) {
  var result = parseWords (words);
  var expected = 'africa';
  assert.deepEqual(result[1], expected);
});

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
