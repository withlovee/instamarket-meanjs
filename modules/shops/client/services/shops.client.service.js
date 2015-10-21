'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shops').factory('Shops', ['$resource',
  function ($resource) {
    return {
      list: $resource('api/shops/:category/:offset', {category: '@_category', offset: '@_offset'}),
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
    this.offset = this.offset + 20;
    
    var url = "/api/shops/" + this.category + "/" + this.offset;
    $http.get(url).then(function(data) {
      var items = data.data;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.offset = this.offset + 20;
      this.busy = false;
    }.bind(this));

  };

  return MyShops;
});
