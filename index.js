/**
 * Module dependencies
 */

var util = require('util');
var path = require('path');
var _ = require('lodash');


/**
 * sails-generate-micro-app
 *
 * Usage:
 * `sails generate micro-app`
 *
 * @description Generates a micro-app.
 * @docs https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Dictionary} scope
   * @param  {Function} done
   */

  before: require('./lib/before'),



  /**
   * The files/folders to generate.
   * @type {Dictionary}
   */
  targets: {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // • e.g. create a folder:
    // ```
    // './hey_look_a_folder': { folder: {} }
    // ```
    //
    // • e.g. create a dynamically-named file relative to `scope.rootPath`
    // (defined by the `filename` scope variable).
    //
    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).
    // ```
    // './:filename': { template: 'example.template.js' },
    // ```
    //
    // • See https://sailsjs.com/docs/concepts/extending-sails/generators for more documentation.
    // (Or visit https://sailsjs.com/support and talk to a maintainer of a core or community generator.)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // create the Sails Dir structure placholders
    './:destDir/api/controllers': { folder: {} },
    './:destDir/api/helpers': { folder: {} },
    './:destDir/api/hooks': { folder: {} },
    './:destDir/api/models': { folder: {} },
    './:destDir/api/policies': { folder: {} },
    './:destDir/api/services': { folder: {} },

    // copy all configuration templates defaults
    './:destDir/config/blueprints:ext': {template: './config/blueprints.template.js'},
    './:destDir/config/bootstrap:ext': {template: './config/bootstrap.template.js'},
    './:destDir/config/custom:ext': {template: './config/custom.template.js'},
    './:destDir/config/datastores:ext': {template: './config/datastores.template.js'},
    './:destDir/config/globals:ext': {template: './config/globals.template.js'},
    './:destDir/config/http:ext': {template: './config/http.template.js'},
    './:destDir/config/i18n:ext': {template: './config/i18n.template.js'},
    './:destDir/config/local:ext': {template: './config/local.template.js'},
    './:destDir/config/log:ext': {template: './config/log.template.js'},
    './:destDir/config/models:ext': {template: './config/models.template.js'},
    './:destDir/config/policies:ext': {template: './config/policies.template.js'},
    './:destDir/config/routes:ext': {template: './config/routes.template.js'},
    './:destDir/config/security:ext': {template: './config/security.template.js'},
    './:destDir/config/session:ext': {template: './config/session.template.js'},
    './:destDir/config/sockets:ext': {template: './config/sockets.template.js'},
    './:destDir/config/views:ext': {template: './config/views.template.js'},
    // config/env
    './:destDir/config/env/production:ext': {template: './config/env/production.template.js'},
    // config/locales
    './:destDir/config/locales/en.json': {template: './config/locales/en.template.json'},
    // tests
    './:destDir/test/basic.test:ext': {template: './templates/test/basic.test.template.js'},
    './:destDir/test/mocha.opts': {template: './templates/test/mocha.template.opts'},
    './:destDir/test/helpers/basic.atomics:ext': {template: './templates/test/helpers/basic.atomics.template.js'},
    './:destDir/test/helpers/bootstrap:ext': {template: './templates/test/helpers/bootstrap.template.js'},

    // copy hook definition and main files
    './:destDir/index:ext': {template: './index.template.js'},
    './:destDir/package.json': {template: './package.template.json'},
  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` and `copy` builtins)
   *
   * @type {String}
   */
  templatesDirectory: path.resolve(__dirname, './templates')

};
