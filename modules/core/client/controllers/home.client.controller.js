'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.categories = [
      { name: 'ต้นไม้', file: 'ต้นไม้'}, 
      { name: 'กราฟิค', file: 'กราฟิค'}, 
      { name: 'เบอร์โทรศัพท์', file: 'เบอร์โทรศัพท์'}, 
      { name: 'ที่นอน', file: 'ที่นอน'}, 
      { name: 'ของเล่น', file: 'ของเล่น'}, 
      { name: 'เครื่องประดับ', file: 'เครื่องประดับ'}, 
      { name: 'แว่นตา', file: 'แว่นตา'}, 
      { name: 'เบเกอรี่', file: 'เบเกอรี่'}, 
      { name: 'ขนม', file: 'ขนม'}, 
      { name: 'น้ำหอม', file: 'น้ำหอม'}, 
      { name: 'เสื้อผ้า', file: 'เสื้อผ้า'}, 
      { name: 'มือ 2', file: 'มือ-2'}, 
      { name: 'เครื่องเขียน', file: 'เครื่องเขียน'}, 
      { name: 'รองเท้า', file: 'รองเท้า'}, 
      { name: 'กระเป๋า', file: 'กระเป๋า'}, 
      { name: 'อาหาร', file: 'อาหาร'}, 
      { name: 'อาหารเสริม', file: 'อาหารเสริม'}, 
      { name: 'เครื่องสำอาง', file: 'เครื่องสำอาง'}, 
      { name: 'คอนเทคเลนส์', file: 'คอนเทคเลนส์'}, 
      { name: 'อุปกรณ์ไอที', file: 'อุปกรณ์ไอที'}, 
      { name: 'หนัง', file: 'หนัง'}, 
      { name: 'สติกเกอร์', file: 'สติกเกอร์'}, 
      { name: 'ของขวัญ', file: 'ของขวัญ'}, 
      { name: 'ทำรายงาน', file: 'ทำรายงาน'}
    ];
  }
]);
