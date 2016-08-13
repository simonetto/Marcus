'use strict';

angular.module('Directives').directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/views/header.html',
        link: function(){

        },
        controller: function( $scope, $location ){

            $scope.amIhidden = true;

            $scope.amISelected = function( index ){
                switch (index){
                case 0:
                    return $location.path() === '/';
                case 1:
                    return $location.path() === '/uber-mich';
                case 2:
                    return $location.path() === '/leistungen' || $location.path() === '/gewerbekunden'  ||
                        $location.path() === '/vorsorgevollmacht'  || $location.path() === '/beratung' ||
                        $location.path() === '/privatkunden';
                case 3:
                    return $location.path() === '/kontakt' || $location.path() === '/impressum';
                }
            };

            $scope.showMenu = function() {
                $scope.amIhidden = !$scope.amIhidden;
            };

            $scope.redirect = function( path ) {
                $scope.amIhidden = true;
                window.jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
                $location.path( path );
            };

        }
    };
});
