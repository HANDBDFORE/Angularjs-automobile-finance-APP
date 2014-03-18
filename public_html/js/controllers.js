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

        .controller('CarLoanController', ['$scope', function($scope) {
                
                
                var rateChanged = function(){
                    $scope.rateinput = $scope.rate * $scope.ratediscount;
                };
                
                $scope.$watch('rate',rateChanged);
                $scope.$watch('ratediscount',rateChanged);

                var calculator = {
                    // {capital,rate,periods,month,repayment_capital}
                    // average capital plus interest
                    ACPIT: {
                        I: {
                            capital: 0,
                            rate: 0,
                            periods: 0,
                            variable: {
                                month: 1,
                                repayment_capital: 0
                            },
                            clear: function() {
                                this.capital =
                                        this.periods =
                                        this.rate = 0;
                                this.variable.month = 1;
                                this.variable.repayment_capital = 0;
                            },
                            setVal: function(capital, rate, periods) {
                                this.capital = capital;
                                this.periods = periods;
                                this.rate = rate;
                            }
                        },
                        monthly_capital_interest: function() {
                            var info = this.I;
                            var formula = (info.capital * info.rate * Math.pow((1 + info.rate), info.periods)) /
                                    (Math.pow((1 + info.rate), info.periods) - 1);
                            return formula;
                        },
                        monthly_capital: function() {
                            var info = this.I;
                            var formula = (info.capital * info.rate * Math.pow((1 + info.rate), (info.variable.month - 1))) /
                                    (Math.pow((1 + info.rate), info.periods) - 1);
                            return formula;
                        },
                        monthly_interest: function(monthly_capital_interest, monthly_capital) {
                            return monthly_capital_interest - monthly_capital;
                        },
                        remaining_capital: function() {
                            var info = this.I;
                            return info.capital - info.variable.repayment_capital;
                        },
                        main: function(month, repayment_capital) {
                            var info = this.I,
                                    res = {};
                            info.variable.month = month || 1;
                            info.variable.repayment_capital = repayment_capital || 0;

                            res.monthly_capital_interest = this.monthly_capital_interest();
                            res.monthly_capital = this.monthly_capital();
                            res.monthly_interest = this.monthly_interest(res.monthly_capital_interest, res.monthly_capital);

                            info.variable.repayment_capital += res.monthly_capital;
                            res.remaining_capital = this.remaining_capital();

                            return res;
                        }
                    },
                    // average capital
                    ACPT: {
                        I: {
                            capital: 0,
                            rate: 0,
                            periods: 0,
                            variable: {
                                month: 1,
                                repayment_capital: 0
                            },
                            clear: function() {
                                this.capital =
                                        this.periods =
                                        this.rate = 0;
                                this.variable.month = 1;
                                this.variable.repayment_capital = 0;
                            },
                            setVal: function(capital, rate, periods) {
                                this.capital = capital;
                                this.periods = periods;
                                this.rate = rate;
                            }
                        },
                        monthly_capital_interest: function() {
                            var info = this.I;
                            var formula = (info.capital / info.periods) +
                                    (info.capital * info.rate * (1 - (info.variable.month - 1) / info.periods));
                            return formula;
                        },
                        monthly_capital: function() {
                            var info = this.I;
                            var formula = info.capital / info.periods;
                            return formula;
                        },
                        monthly_interest: function(monthly_capital_interest, monthly_capital) {
                            var info = this.I;
                            var formula = info.capital * info.rate * (1 - (info.variable.month - 1) / info.periods);
                            return formula;
                        },
                        remaining_capital: function() {
                            var info = this.I;
                            return info.capital - info.variable.repayment_capital;
                        },
                        main: function(month, repayment_capital) {
                            var info = this.I,
                                    res = {};
                            info.variable.month = month || 1;
                            info.variable.repayment_capital = repayment_capital || 0;

                            res.monthly_capital_interest = this.monthly_capital_interest();
                            res.monthly_capital = this.monthly_capital();
                            res.monthly_interest = this.monthly_interest(res.monthly_capital_interest, res.monthly_capital);

                            info.variable.repayment_capital += res.monthly_capital;
                            res.remaining_capital = this.remaining_capital();
                            return res;
                        }
                    }
                };
                //$scope.rateinput=  $scope.rateselect * $scope.ratediscount;

                $scope.calculated = function() {
                    $scope.rateinput = $scope.rateselect * $scope.ratediscount;
                    calculator.ACPIT.I.setVal($scope.carsum, $scope.rateinput, $scope.periodselect);
                    var totalDate = calculator.ACPIT.main(null,null);
                    
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
                
                
                var periodModel = [{
                        id: 1001,
                        name: '6个月',
                        period: 6
                    }, {
                        id: 1002,
                        name: '1年',
                        period: 12
                    }, {
                        id: 1003,
                        name: '2年',
                        period: 24
                    }, {
                        id: 1004,
                        name: '3年',
                        period: 36
                    }
                ];
                
                $scope.rateSelectModel = rateSelectModel;
                $scope.rateDiscountModel = rateDiscountModel;
                $scope.periodModel = periodModel;

            }]);
