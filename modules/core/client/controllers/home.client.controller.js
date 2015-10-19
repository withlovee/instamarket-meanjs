'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.categories = ['ต้นไม้', 'กราฟิค', 'เบอร์โทรศัพท์', 'ที่นอน', 'ของเล่น', 'เครื่องประดับ', 'แว่นตา', 'เบเกอรี่', 'ขนม', 'น้ำหอม', 'เสื้อผ้า', 'มือ 2', 'เครื่องเขียน', 'รองเท้า', 'กระเป๋า', 'อาหาร', 'อาหารเสริม', 'เครื่องสำอาง', 'คอนเทคเลนส์', 'เครื่องราง', 'อุปกรณ์ไอที', 'หนัง', 'สติกเกอร์', 'ของขวัญ', 'ทำรายงาน'];
  }
]);
