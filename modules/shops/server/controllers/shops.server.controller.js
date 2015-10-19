'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  request = require('request'),
  Shop = mongoose.model('Shop'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current shop
 */
exports.read = function (req, res) {
  res.json(req.shop);
};

/**
 * List of Shops
 */
exports.list = function (req, res) {

  var url ='https://instamarket-xyz-ijygm8ult3yn.runscope.net/api/shops/';
  request(url, function (error, response, body) {
    if (!error) {
      console.log(body);
     }
   });

  Shop.find({is_shop: 1}).limit(100).exec(function (err, shops) {
  // Shop.find().sort('-created').limit(10).populate('user', 'displayName').exec(function (err, shops) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shops);
    }
  });
};
exports.list_by_category = function (req, res, next, category) {
  Shop.find({
    is_shop: 1, 
    categories: { $in: [ category ] }
  }).exec(function (err, shops) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shops);
    }
  });
};

/**
 * Shop middleware
 */
exports.shopByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Shop is invalid'
    });
  }

  Shop.findById(id).populate('user', 'displayName').exec(function (err, shop) {
    if (err) {
      return next(err);
    } else if (!shop) {
      return res.status(404).send({
        message: 'No shop with that identifier has been found'
      });
    }
    req.shop = shop;
    next();
  });
};
