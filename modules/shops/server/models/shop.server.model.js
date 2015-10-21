'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Shop Schema
 */
var ShopSchema = new Schema({
    username: String,
    profile_picture: String,
    id: { type: Number, unique: true },
    full_name: String,
    following: [String], // never use
    get_info: { type: Boolean, default: false },
    find_following: { type: Boolean, default: false },
    find_followers: Boolean,
    last_check: { type: Date, default: Date.now },
    last_fetched: { type: Date, default: Date.now },
    posts_fetched: Boolean,
    is_shop: Number,
    is_shop_verified: Boolean,
    is_shop_follower: Boolean,
    influencer: { type: Boolean, default: false },
    /* profile */
    counts: {
      media: Number,
      followed_by: Number,
      follows: Number
    },
    bio: String,
    website: String,
    categories: [String]

}, { collection: 'users' });

mongoose.model('Shop', ShopSchema);
