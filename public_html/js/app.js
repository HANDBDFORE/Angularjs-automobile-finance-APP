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
    'ui.router',
    'ui.route'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/welcome");
        $stateProvider.
                state('welcome', {
                    url: "/welcome",
                    templateUrl: "partials/welcome.html"
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
                    controller: 'LoanPlanController',
                    templateUrl: 'partials/loanplan.html'
                });
    }]);



