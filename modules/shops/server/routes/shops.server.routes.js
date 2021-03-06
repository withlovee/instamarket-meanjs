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

  app.route('/api/shops/:category/length').all(shopsPolicy.isAllowed)
    .get(shops.length_by_category);

  app.route('/api/shops/:category/:offset').all(shopsPolicy.isAllowed)
    .get(shops.list_by_category);
    
  // Finish by binding the shop middleware
  // app.param('category', shops.list_by_category);

  // Single shop routes
  app.route('/api/shop/:shopId').all(shopsPolicy.isAllowed)
    .get(shops.read);
  app.route('/api/shop/:shopId/no_shop').all(shopsPolicy.isAllowed)
    .post(shops.mark_no_shop);
  app.route('/api/shop/:shopId/is_shop').all(shopsPolicy.isAllowed)
    .post(shops.mark_is_shop);

  // Finish by binding the shop middleware
  app.param('shopId', shops.shopByID);
};
