'use strict';
controllers.controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);