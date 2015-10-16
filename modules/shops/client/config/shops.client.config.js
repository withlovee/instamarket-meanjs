'use strict';

// Configuring the Articles module
angular.module('shops').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Shops',
      state: 'shops',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'shops', {
      title: 'List Shops',
      state: 'shops.list'
    });

    // Add the dropdown create item
    // Menus.addSubMenuItem('topbar', 'shops', {
    //   title: 'Create Shops',
    //   state: 'shops.create',
    //   roles: ['user']
    // });
  }
]);
