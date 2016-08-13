'use strict';

angular.module('Directives').directive('imgCarousel', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/views/carousel.html',
        link: function(){

        },
        controller: function( $scope, $location ){

            $scope.getImg = function() {
                var curDate = new Date(),
                    startSummer = new Date( '06 21 ' + curDate.getFullYear() ),
                    startWinter = new Date( '01 02 ' + curDate.getFullYear() ),
                    startAutumn = new Date( '09 21 ' + curDate.getFullYear() ),
                    startSpring = new Date( '03 21 ' + curDate.getFullYear() ),
                    startChristmas = new Date( '12 15 ' + curDate.getFullYear() ),
                    startNewYear = new Date( '12 26 ' + curDate.getFullYear() );


                switch ( $location.path() ){
                case '/privatkunden':
                    return 'carousel-privatkunden';
                case '/leistungen':
                    return 'carousel-leistungen';
                case '/partner':
                    return 'carousel-partner';
                case '/gewerbekunden':
                    return 'carousel-gewerbekunden';
                case '/beratung':
                    return 'carousel-beratung';
                case '/vorsorgevollmacht':
                    return 'carousel-vorsorgevollmacht';
                case '/sitemap':
                    return 'carousel-sitemap';
                case '/kontakt':
                    return 'carousel-kontakt';
                case '/impressum':
                    return 'carousel-kontakt';
                case '/uber-mich':
                    return 'carousel-uber-mich';
                }

                if( curDate >= startSummer && curDate < startAutumn ){
                    return 'carousel-summer';
                }

                if( curDate >= startAutumn && curDate < startChristmas ){
                    return 'carousel-autumn';
                }

                if( curDate >= startChristmas && curDate < startNewYear ){
                    return 'carousel-christmas';
                }

                if( curDate >= startNewYear || curDate < startWinter ){
                    return 'carousel-new-year';
                }

                if( curDate >= startWinter && curDate < startSpring ){
                    return 'carousel-winter';
                }

                if( curDate >= startSpring && curDate < startSummer ){
                    return 'carousel-spring';
                }

                return 'carousel-main';
            };
        }
    };
});
