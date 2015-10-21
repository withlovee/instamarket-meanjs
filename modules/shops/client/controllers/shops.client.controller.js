'use strict';

// Shops controller
angular.module('shops').controller('ShopsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Shops', 'MyShops',
  function ($scope, $stateParams, $location, Authentication, Shops, MyShops) {
    $scope.authentication = Authentication;
    $scope.offset = 0;
    $scope.myShops = new MyShops($stateParams.category);

    $scope.categoryLength = Shops.length.get({category: $stateParams.category});

    // Find a list of Shops
    $scope.find = function () {
      if($stateParams.category){
        $scope.shops = Shops.list.query({category: $stateParams.category, offset: $scope.offset});
        $scope.offset = $scope.offset + 1;
        $scope.page_name = $stateParams.category;
      } else {
        // $scope.shops = Shops.list.query();
        $scope.shops = [];
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
