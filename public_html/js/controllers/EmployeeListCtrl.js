'use strict';
controllers.controller('EmployeeListCtrl', ['$scope', 'Employee', function($scope, Employee) {
        $scope.employees = Employee.query();
    }]);