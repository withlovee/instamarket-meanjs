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
 // never use
exports.list = function (req, res) {

  Shop.find({is_shop: 1}).limit(20).exec(function (err, shops) {
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

exports.list_by_category = function (req, res, next) {

  var url ='https://instamarket-xyz-ijygm8ult3yn.runscope.net/api/shops/';
  request(url, function (error, response, body) {
    if (!error) {
      console.log(body);
     }
   });

  Shop.find({
    is_shop: 1, 
    categories: req.params.category
  }).select({
    // _id: 0,
    username: 1,
    profile_picture: 1,
    bio: 1,
    full_name: 1,
    counts: 1,
  }).sort({
    'counts.followed_by': -1
  }).skip(req.params.offset).limit(18).exec(function (err, shops) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shops);
    }
  });
};

exports.length_by_category = function (req, res, next) {

  Shop.count({
    is_shop: 1, 
    categories: req.params.category
  }, function (err, count) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json({ length: count });
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
