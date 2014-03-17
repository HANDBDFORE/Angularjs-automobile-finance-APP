var mobileApp = angular.module('myMobileApp', ['ngRoute','ngTouch']);
function routeconfig($routeProvider) {
    $routeProvider.
            when('/', {
                templateUrl: 'partials/v1.html'
            }).
            when('/v2', {
                templateUrl: 'partials/v2.html'
            }).
            otherwise(
                    {
                        redirectTo: '/'
                    });
}

mobileApp.config(routeconfig);
