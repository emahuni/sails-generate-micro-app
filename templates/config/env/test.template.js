/**
 * Test environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for test.  The configuration in this file
 * is only used in your test environment, i.e. when you test your app using:
 *
 * ```
 * NODE_ENV=test mocha
 * ```
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */

module.exports = {
  port: 1400,

  globals: {
    _: require('lodash'),
    async: require('async'),
    models: true,
    sails: true,
  },

  hooks: {
    // load the ORM
    // "orm": require('sails-hook-orm'),
  },

  models: {
    // set migrations to drop so that we get a fresh db each time
    migrate: "drop",
    schema: true,
    attributes: {
      createdAt: { type: 'number', autoCreatedAt: true, },
      updatedAt: { type: 'number', autoUpdatedAt: true, },
      id: { type: 'number', autoIncrement: true, },
    },
    dataEncryptionKeys: {
      default: 'nffGmgrYp8Yi+HJHb5IO3ZlyDwFiRghdMa+EHRLI/1s='
    },
    cascadeOnDestroy: true
  },

  i18n: {
    locales: ['en',],
  },

  session: {
    secret: '9a5c3be05f08e7be7982ee6cbafbee0a',
  },

  views: {
    layout: 'layouts/layout',
  },
}
