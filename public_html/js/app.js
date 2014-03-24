'use strict';
var controllers = angular.module('myMobileApp.controllers', []);
angular.module('myMobileApp', [
    'ngRoute',
    'ngTouch',
    'myMobileApp.controllers',
    'CalculatorModule',
    'calculatorFilter',
    'calculatorService',
    'ngAnimate',
    'ngResource',
    'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/v1");
        $stateProvider.
                state('v1', {
                    url: "/v1",
                    templateUrl: "partials/v1.html"
                }).
                state('v2', {
                    url: "/v2",
                    templateUrl: "partials/v2.html"
                }).
                state('calculator', {
                    url:'/calculator',
                    controller: 'CarLoanController',
                    templateUrl: 'partials/calculator.html'
                }).
                state('selectauto', {
                    url:'/selectauto',
                    controller: 'CarSelectController',
                    templateUrl: 'partials/selectauto.html'

                }).         
                state('quotation', {
                    url:'/quotation',
                    controller: 'CarLoanController',
                    templateUrl: 'partials/quotation.html'

                }).
                state('questionnaire',{
                    url:'/questionnaire',
                    controller: 'QuestionnaireController',
                    templateUrl: 'partials/questionnaire.html'
                }).
                state('financialplan',{
                    url:'/financialplan',
                    templateUrl: 'partials/financialplan.html'
                }).
                state('loanplan',{
                    url:'/loanplan',
                    controller: 'FinancialPlanController',
                    templateUrl: 'partials/loanplan.html'
                });
    }]);



