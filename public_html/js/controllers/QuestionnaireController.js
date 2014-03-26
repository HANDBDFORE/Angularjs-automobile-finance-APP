'use strict';
controllers.controller('QuestionnaireController', ['$scope','$state', function($scope,$state) {
        $scope.Dialog1yes = function() {
            self.location = '#/loanplan?id=1001'; //跳转到标准信贷
//            $state.go('loanplan',{id:1001});
        };
        $scope.Dialog1no = function() {
            $scope.modalShown = false;
        };
        $scope.Q1cancle = function() {
            $state.go('financialplan');
        }; 
        $scope.Q1yes = function() {
            self.location = '#/loanplan?id=1001';
        };
        $scope.Q1no = function() {
            $state.go('financialplan');
        };
        $scope.Q2yes = function() {
            self.location = ''; //跳转到标准信贷
        };
        $scope.Q2no = function() {
        };
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };
    }]);