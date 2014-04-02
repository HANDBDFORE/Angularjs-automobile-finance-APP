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
    'ui.route',
    'ngmodel.format'
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
                    templateUrl: function(){ return 'partials/calculator.html'},
                   
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
                    controller: 'FinalcialPlanController',
                    templateUrl: 'partials/financialplan.html'
                }).
                state('loanplan',{
                    url:'/loanplan',
                    controller: 'LoanPlanController',
                    templateUrl: 'partials/loanplan.html'
                });
    }]).directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});


