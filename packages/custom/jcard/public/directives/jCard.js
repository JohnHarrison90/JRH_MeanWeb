'use strict';

angular.module('mean.jcard').directive('jcard', function() {
    return {
        // can be in-lined or async loaded by xhr
        // or inlined as JS string (using template property)
        templateUrl: 'jcard/assets/directiveHTML/card.html',
        replace: true,
        restrict: 'E'
    };
});