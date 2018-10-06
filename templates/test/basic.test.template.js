let __line = new require('lineno')(__filename).get; // you can use this to print out the line that the test occurs. see below...

const basicAtomics = require('./helpers/basic.atomics.js');

describe('Sails-hook-micro-apps Hook tests #', function () {

  // Test that Sails can lift with the hook in place
  it(`@${__line()} doesn\'t crash Sails`, async function () {
    return true;
  });

  // this tests the app api that we know was loaded normally, nothing should fail otherwise we have broken tests in testMicroApp
  context(`Do atomic tests from helper file basic.atomics.js, you can name the files and functions whatever you want ::`, async function () {
    basicAtomics('... and pass and use any params you want');
  });

});
