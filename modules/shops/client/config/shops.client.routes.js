'use strict';

// Setting up route
angular.module('shops').config(['$stateProvider',
  function ($stateProvider) {
    // Shops state routing
    $stateProvider
      .state('shops', {
        abstract: true,
        url: '/shops',
        template: '<ui-view/>'
      })
      .state('shops.list', {
        url: '',
        templateUrl: 'modules/shops/client/views/list-shops.client.view.html'
      })
      .state('shops.view', {
        url: '/:shopId',
        templateUrl: 'modules/shops/client/views/view-shop.client.view.html'
      });
  }
]);
