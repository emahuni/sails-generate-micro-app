/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


				/***************************************************************************
					*                                                                          *
					* More custom routes here...                                               *
					* (See https://sailsjs.com/config/routes for examples.)                    *
					*                                                                          *
					* If a request to a URL doesn't match any of the routes in this file, it   *
					* is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
					* not match any of those, it is matched against static assets.             *
					*                                                                          *
					***************************************************************************/


				//  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
				//  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
				//  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
    '/app/ctrltest': 'AppController.appCtrlTest',
    '/app/actiontest': 'appaction/test-action',

				'/appaction/act-policy-allow': 'appaction/act-policy-allow',
				'/appaction/act-policy-deny': 'appaction/act-policy-deny',

				'/app/appctrlpolicyallow': 'AppController.appCtrlPolicyAllow',
				'/app/appctrlpolicydeny': 'AppController.appCtrlPolicyDeny',

				//  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
				//  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
				//  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


				//  ╔╦╗╦╔═╗╔═╗
				//  ║║║║╚═╗║
				//  ╩ ╩╩╚═╝╚═╝


};
