/**
 * Created by Emmanuel Mahuni. MIT 2018
 */

module.exports = function (sails) {
  const loader = require('sails-util-micro-apps')(sails);

  // Load policies and config from default directories
  loader.configure();

  /*
    OR if you want to set custom path :

    loader.configure({
      hooks: __dirname, // Path to your hook's hooks
      policies: __dirname + '/api/policies', // Path to your hook's policies
      config: __dirname + '/config' // Path to your hook's config
    });

  */

  return {
    initialize: function (next) {
      // Load controllers, models & services from default directories
      loader.inject(function (err) {
        return next(err);
      });

      /*
        OR if you want to set custom path :

        loader.inject({
          controllers: __dirname + '/api/controllers', // Path to your hook's controllers
          models: __dirname + '/api/models', // Path to your hook's models
          helpers: __dirname + '/api/helpers', // Path to your hook's helpers
          services: __dirname + '/api/services' // Path to your hook's services
        }, function (err) {
          return next(err);
        });

      */
    }
  };
};
