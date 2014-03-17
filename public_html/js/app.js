'use strict';

angular.module('myMobileApp', [
    'ngRoute',
    'ngTouch',
    'myMobileApp.controllers'
]).
        config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                        when('/', {
                            templateUrl: 'partials/v1.html'
                        }).
                        when('/v2', {
                            templateUrl: 'partials/v2.html'
                        }).
                        when('/calculator', {
                            controller:'CarLoanController',
                            templateUrl: 'partials/calculator.html'
                        }).
                        otherwise(
                                {
                                    redirectTo: '/'
                                });
            }]);



