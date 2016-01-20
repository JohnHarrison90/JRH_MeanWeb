'use strict';

angular.module('mean.jcard').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('jcard example page', {
      url: '/jcard/example',
      templateUrl: 'jcard/views/index.html'
    }).state('cardDirectiveExample', {
      url: '/jcard/cardShow',
      templateUrl: 'jcard/views/testCards.html'
    }).state('adminCards', {
      url: '/jcard/admin',
      templateUrl: 'jcard/views/AdminCards.html'
    });
  }
]);
