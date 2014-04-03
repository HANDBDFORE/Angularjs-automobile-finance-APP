/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
controllers.controller('FinalcialPlanController', ['$scope', 'Loan', '$state', function($scope, Loan, $state) {
        $scope.visibility = 'true';
        if ($scope.$parent.loanModel.flag === 'true') {
            $scope.visibility = 'false';
            $scope.$parent.loanModel.flag = '';
        }
        $scope.plan1 = function() {
            Loan.query({data: 'plan'}, function(data) {
                angular.forEach(data, function(value) {
//                    console.log(value.id);
                    if (value.id === '1001') {
                        $scope.$parent.loanModel.plan = value;
                        $state.go('loanplan');
                    }

                });
            });
        };
        $scope.plan2 = function() {
            Loan.query({data: 'plan'}, function(data) {
                angular.forEach(data, function(value) {
//                    console.log(value.id);
                    if (value.id === '1002') {
                        $scope.$parent.loanModel.plan = value;
                        $state.go('loanplan');
                    }

                });
            });
        };
    }]);
