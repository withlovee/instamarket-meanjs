'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shops').factory('Shops', ['$resource',
  function ($resource) {
    return {
      list: $resource('api/shops/:category', {category: '@_category'}),
      one: $resource('api/shop/:shopId', {shopId: '@_id'}),
    };
    // console.log($resource);
    // if($resource == 'query'){
    //   return $resource('api/shops/:category', {
    //     category: '@_category'
    //   });
    // }
    // else{
    //   return $resource('api/shop/:shopId', {
    //     shopId: '@_id'
    //   }, {
    //     update: {
    //       method: 'PUT'
    //     }
    //   });
    // }
  }
]);
