'use strict';

var _mainModules = [
    'Services',
    'Filters',
    'Directives',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'Landing',
    'ui.bootstrap',
    'UberMich',
    'Leistungen',
    'Referenzen',
    'Kontakt',
    'Sitemap',
    'Gewerbekunden',
    'Vorsorgevollmacht',
    'Beratung',
    'Privatkunden',
    'Impressum',
    // yo:ngMainModules
];


angular.module('Marcus', _mainModules )
    .config( function($routeProvider){
        //redirect any invalid hash to /home
        $routeProvider.otherwise({
            redirectTo: '/'
        });

        var routes = [];

        routes.push({
            name: '/',
            params: {
                templateUrl: 'scripts/landing/views/landing.html',
                controller: 'LandingCtrl'
            }
        });

        routes.push({
            name: '/uber-mich',
            params: {
                templateUrl: 'scripts/uber-mich/views/uber-mich.html',
                controller: 'UberMichCtrl'
            }
        });

        routes.push({
            name: '/leistungen',
            params: {
                templateUrl: 'scripts/leistungen/views/leistungen.html',
                controller: 'LeistungenCtrl'
            }
        });

        routes.push({
            name: '/kontakt',
            params: {
                templateUrl: 'scripts/kontakt/views/kontakt.html',
                controller: 'KontaktCtrl'
            }
        });

        routes.push({
            name: '/sitemap',
            params: {
                templateUrl: 'scripts/sitemap/views/sitemap.html',
                controller: 'SitemapCtrl'
            }
        });

        routes.push({
            name: '/gewerbekunden',
            params: {
                templateUrl: 'scripts/gewerbekunden/views/gewerbekunden.html',
                controller: 'GewerbekundenCtrl'
            }
        });

        routes.push({
            name: '/vorsorgevollmacht',
            params: {
                templateUrl: 'scripts/vorsorgevollmacht/views/vorsorgevollmacht.html',
                controller: 'VorsorgevollmachtCtrl'
            }
        });

        routes.push({
            name: '/beratung',
            params: {
                templateUrl: 'scripts/beratung/views/beratung.html',
                controller: 'BeratungCtrl'
            }
        });

        routes.push({
            name: '/privatkunden',
            params: {
                templateUrl: 'scripts/privatkunden/views/privatkunden.html',
                controller: 'PrivatkundenCtrl'
            }
        });

        routes.push({
            name: '/impressum',
            params: {
                templateUrl: 'scripts/impressum/views/impressum.html',
                controller: 'ImpressumCtrl'
            }
        });

// yo:ngRoutes

        routes.forEach(function(route){
            $routeProvider.when(route.name, route.params);
        });
    });
