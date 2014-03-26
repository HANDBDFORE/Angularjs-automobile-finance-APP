'use strict';
controllers.controller('QuestionnaireController', ['$scope', '$state', 'Loan', function($scope, $state, Loan) {
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
//            self.location = '#/loanplan?id=1001';
            var data = Loan.query({id:1001});
            $scope.$parent.loanModel.plan = data;
            $state.go('loanplan');
        };
        $scope.Q1no = function() {
            $state.go('financialplan');
        };
        $scope.Q2yes = function() {
            $scope.$parent.loanModel.flag = 'true';
            $state.go('financialplan');
        };
        $scope.Q2no = function() {
            $state.go('financialplan');
        };
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };
    }]);