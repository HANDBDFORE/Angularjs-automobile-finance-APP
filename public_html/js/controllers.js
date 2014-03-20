'use strict';


angular.module('myMobileApp.controllers', [])
        .controller('MainCtrl', ['$scope', function($scope) {
                $scope.$on("Resize", function(event, msg) {
                    alert('!');
                });
            }])
        .controller('EmployeeListCtrl', ['$scope', 'Employee', function($scope, Employee) {
                $scope.employees = Employee.query();
            }])
        .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function($scope, $routeParams, Employee) {
                $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
            }])
        .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function($scope, $routeParams, Report) {
                $scope.employees = Report.query({employeeId: $routeParams.employeeId});
            }])
        .controller('CarSelectController', ['$scope', '$http', function($scope, $http) {
                $http.get('http://localhost:80/brand.php/').success(function(data) {
                    $scope.selectBrand = data;
                }).error(function() {
                    alert('failed');
                });

                function selectType() {
                    if ($scope.brand) {
                        $http.get('http://localhost:80/type.php?brand=' + $scope.brand).success(function(data) {
                            $scope.selectType = data;

                        });
                    }
                }
                $scope.$watch('brand', selectType);
            }])
        .controller('CarLoanController', ['$scope','Rate','Calculator', function($scope,Rate) {
//             $http.get('nativedata/period.json').success(function(data){
//                    $scope.periodModel = data;
//             }).error(function(){
//                    alert('failed');
//             });   
             
             $scope.rateSelectModel = Rate.queryRate();
             $scope.periodModel = Rate.queryPeriod();
             
                $scope.rateDiscountShow = true;
                $scope.rateShow=true;
                var rateChanged = function(){
                    
                    $scope.rateinput = $scope.rate * $scope.ratediscount;
                    if($scope.rateinput !== null){
                        //$scope.rateDiscountShow = false;
                    }
                };
                
               var rateWatch = $scope.$watch('rate+ratediscount',rateChanged);
               //var rateDiscountWatch = $scope.$watch('ratediscount',rateChanged);
               //$scope.rateinput=  $scope.rateselect * $scope.ratediscount;

                $scope.calculated = function() {
                    $scope.rateinput = $scope.rateselect * $scope.ratediscount;
                    Calculator.ACPIT.I.setVal($scope.carsum, $scope.rateinput, $scope.periodselect);
                    var totalDate = Calculator.ACPIT.main(null,null);
                    
                    $scope.monthlyCapitalInterest = totalDate.monthly_capital_interest;
                    $scope.totalInterest = 2;
                    $scope.totalRepayment = 3;
                };
                
                $scope.reset = function(){
                    $scope.monthlyCapitalInterest = null;
                    $scope.totalInterest = null;
                    $scope.totalRepayment = null;
                };


                var rateSelectModel = [{
                        id: 1001,
                        name: '5.6%(6个月及以内)',
                        rate: 5.6
                    }, {
                        id: 1002,
                        name: '6.0%（1年及以内）',
                        rate: 6.0
                    }, {
                        id: 1003,
                        name: '6.15%（3年及以内）',
                        rate: 6.15
                    }, {
                        id: 1004,
                        name: '6.4%（5年及以内）',
                        rate: 6.4
                    }
                ];
                
                var rateDiscountModel = [{
                        id: 1001,
                        name: '无折扣',
                        discount: 1
                    }, {
                        id: 1002,
                        name: '9折',
                        discount: 0.9
                    }, {
                        id: 1003,
                        name: '8折',
                        discount: 0.8
                    }, {
                        id: 1004,
                        name: '7折',
                        discount: 0.7
                    }
                ];
                

                $scope.rateDiscountModel = rateDiscountModel;
                

            }]);
