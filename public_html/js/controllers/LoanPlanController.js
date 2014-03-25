/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
controllers.controller('LoanPlanController', ['$scope','Loan','$location', function($scope,Loan,$location) {
        var loanid = $location.url().split('=')[1];        
        $scope.loans = Loan.query({id: loanid});
    }]);

