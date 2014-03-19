'use strict';

angular.module('myMobileApp', [
    'ngRoute',
    'ngTouch',
    'myMobileApp.controllers',
    'CalculatorModule',
    'calculatorFilter',
    'calculatorService',
    'ngResource'
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
                        when('/selectauto',{
                            controller:'CarSelectController',
                            templateUrl: 'partials/selectauto.html'
                            
                        }).
                        otherwise(
                                {
                                    redirectTo: '/'
                                });
            }]);



