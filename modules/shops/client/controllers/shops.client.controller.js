'use strict';

// Shops controller
angular.module('shops').controller('ShopsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Shops',
  function ($scope, $stateParams, $location, Authentication, Shops) {
    $scope.authentication = Authentication;

    // Find a list of Shops
    $scope.find = function () {
      if($stateParams.category){
        $scope.shops = Shops.list.query({category: $stateParams.category});
        $scope.page_name = $stateParams.category;
      } else {
        $scope.shops = Shops.list.query();
        $scope.page_name = 'ร้านค้าทั้งหมด';
      }
    };

    // Find existing Shop
    $scope.findOne = function () {
      $scope.shop = Shops.one.get({
        shopId: $stateParams.shopId
      });
    };
  }
]);
