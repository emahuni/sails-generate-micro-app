/**
 * Module dependencies
 */

var _ = require('lodash');
var path = require('path');
//_.defaults = require('merge-defaults');



/**
 * This `before()` function is run before generating targets.
 * It validates user input, configures defaults, gets extra
 * dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

	// scope.args are the raw command line arguments.
	//
	// e.g. if you run:
	// sails generate policy user find create update
	// then:
	// scope.args = ['user', 'find', 'create', 'update']
	//
	_.defaults(scope, {
		id: scope.args[0],
		actions: scope.args.slice(1)
	});


	//
	// Validate custom scope variables which
	// are required by this generator.
	//
	if (!scope.rootPath) {
		return cb('Usage: sails generate micro-app <micro-app name>');
	}

	// Check that we're in a valid sails project
	// TODO: see if we can remove this-- I think it's already been done by
	// Sails core at this point
	// var pathToPackageJSON = path.resolve(scope.rootPath, 'package.json');
	// var package, invalidPackageJSON;
	// try {
		// package = require(pathToPackageJSON);
	// } catch (e) {
		// invalidPackageJSON = true;
	// }

	// if (invalidPackageJSON) {
		// return cb.invalid('Sorry, this command can only be used in the root directory of a Sails project.');
	// }

	if (!scope.id) {
		return cb('Usage: sails generate micro-app <micro-app-name>');
	}



	// Determine default values based on the
	// available scope.

	_.defaults(scope, {
		entity: scope.id,
		ext: scope.coffee ? '.coffee' : '.js',
		actions: [],
  });

  _.defaults(scope, {
		destDir: `sails-micro-app-${scope.entity}`,
		rootPath: scope.rootPath,
		lang: scope.coffee ? 'coffee' : 'js'
	});

  console.log('scope: ', require('util').inspect(scope));


	//
	// Trigger callback with no error to proceed.
	//

	return cb();
};
