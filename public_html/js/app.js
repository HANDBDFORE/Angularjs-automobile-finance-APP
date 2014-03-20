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
                        when('/questionnaire', {
                            controller:'Questionnaire',
                            templateUrl: 'partials/questionnaire.html'
                        }).
                        when('/financialplan', {
                            controller:'FinancialPlan',
                            templateUrl: 'partials/financialplan.html'
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



