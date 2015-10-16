'use strict';

/**
 * Module dependencies.
 */
var shopsPolicy = require('../policies/shops.server.policy'),
  shops = require('../controllers/shops.server.controller');

module.exports = function (app) {
  // Shops collection routes
  app.route('/api/shops').all(shopsPolicy.isAllowed)
    .get(shops.list);

  app.route('/api/shops/:category').all(shopsPolicy.isAllowed)
    .get(shops.list_by_category);
    
  // Finish by binding the shop middleware
  app.param('category', shops.list_by_category);

  // Single shop routes
  app.route('/api/shop/:shopId').all(shopsPolicy.isAllowed)
    .get(shops.read);

  // Finish by binding the shop middleware
  app.param('shopId', shops.shopByID);
};
