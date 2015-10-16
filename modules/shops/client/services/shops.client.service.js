'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shops').factory('Shops', ['$resource',
  function ($resource) {
    return $resource('api/shops/:shopId', {
      shopId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
