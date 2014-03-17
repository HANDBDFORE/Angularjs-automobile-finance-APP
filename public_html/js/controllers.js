'use strict';

angular.module('myMobileApp.controllers', [])
        .controller('MainCtrl', ['$scope', function($scope) {
            }])
        .controller('EmployeeListCtrl', ['$scope', 'Employee', function($scope, Employee) {
                $scope.employees = Employee.query();
            }])
        .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function($scope, $routeParams, Employee) {
                $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
            }])
        .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function($scope, $routeParams, Report) {
                $scope.employees = Report.query({employeeId: $routeParams.employeeId});
            }]);
