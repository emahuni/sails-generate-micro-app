// make sure that we flag the environment as development
process.env.NODE_ENV = 'test';

const Sails = require('sails').Sails;

const chai = require('chai');
global.expect = chai.expect;

global.chalk = require('chalk');

const util = require('util');

// get nice logging and tracing output with log source line numbers and filename
const console = require('contrace')({
  stackIndex: 1,
  // configure for Sails
  methods: [ 'silly', 'verbose', 'info', 'debug', 'warn', 'error' ],
});

// Before running any tests, attempt to lift Sails
before(function (done) {
  // Hook tests will timeout in 10 seconds, adjust for more
  this.timeout(10000);

  // Attempt to lift sails with a custom test environment configuration
  Sails().load({
    log: {
      level: 'debug',
      // level: 'verbose',
      // level: 'silly',
      custom: console,
      inspect: false,
    },

    // the rest of the configs go to config/env/test.js and do the default test envrionment config

  }, function (err, _sails) {
    if (err) return done(err);

    global.sails = _sails;
    global.log = sails.log;

    return done();
  });
});

// After tests are complete
after(function (done) {
  // Lower Sails (if it successfully lifted ealier)
  if (sails) {
    return sails.lower(done);
  }

  // Otherwise just return
  return done();
});
