'use strict';

// Shops controller
angular.module('shops').controller('ShopsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Shops',
  function ($scope, $stateParams, $location, Authentication, Shops) {
    $scope.authentication = Authentication;

    // Find a list of Shops
    $scope.find = function () {
      $scope.shops = Shops.query();
    };

    // Find existing Shop
    $scope.findOne = function () {
      $scope.shop = Shops.get({
        shopId: $stateParams.shopId
      });
    };
  }
]);
