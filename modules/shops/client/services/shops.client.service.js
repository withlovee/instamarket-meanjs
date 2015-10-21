'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shops').factory('Shops', ['$resource',
  function ($resource) {
    return {
      list: $resource('api/shops/:category/:offset', {category: '@_category', offset: '@_offset'}),
      length: $resource('api/shops/:category/length', {category: '@_category'}),
      one: $resource('api/shop/:shopId', {shopId: '@_id'}),
    };
  }
]);

angular.module('shops').factory('MyShops', function($http) {
  var MyShops = function(category) {
    this.items = [];
    this.busy = false;
    this.offset = 0;
    this.category = category;
  };

  MyShops.prototype.more = function(category) {
    if (this.busy) return;
    this.busy = true;
    
    console.log('more ' + this.offset + ' ' + this.busy);
    var url = "/api/shops/" + this.category + "/" + this.offset;
    $http.get(url).then(function(data) {
      var items = data.data;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      // console.log('added ' + this.offset);
      this.offset = this.offset + 18;
      this.busy = false;
    }.bind(this));

  };

  return MyShops;
});
