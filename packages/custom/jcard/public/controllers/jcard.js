'use strict';

/* jshint -W098 */
angular.module('mean.jcard').controller('JcardController', ['$scope', 'Global', 'Jcard',
  function($scope, Global, Jcard) {
    $scope.global = Global;
    $scope.package = {
      name: 'jcard'
    };
  }
]).controller('cardAdmin', ['$scope',
  function($scope) {
    $scope.cards = [];
    $scope.addCardView = false;
    $scope.card = {'titleText':'heyDude','headerText':"Header Stuff", 'bodyText':"Body Stuff"}
    $scope.addCard = function(card){
      //alert(JSON.stringify(card));
      $scope.cards.push( angular.copy(card) );
    };
    $scope.showCard = function(card){
      alert(JSON.stringify(card));
    };
    $scope.setCard = function(cardi){
      $scope.card = cardi;
    };

  }
]);