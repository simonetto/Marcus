'use strict';

angular.module('Directives').directive('ngClick', function ( $window, $location ) {
    return {
        restrict: 'A',
        priority: 100, // give it higher priority than built-in ng-click
        link: function(scope, element) {
            element.bind('click', function( curElement ) {
                $window.ga( 'send', 'event', $location.url(), curElement.currentTarget.innerText );
            });
        }
    };
});
