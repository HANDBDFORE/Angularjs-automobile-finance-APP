'use strict';
controllers.controller('CarLoanController', ['$scope', 'Rate', 'Brand', 'Type', 'Calculator', function($scope, Rate, Brand, Type) {
                $scope.selectedBrand = Brand.getData(); //获取品牌

                function selectType() {
                    if ($scope.brandSelected) {
                        $scope.selectedType = Type.query({type: $scope.brandSelected});
                    }
                }
                $scope.$watch('brandSelected', selectType);   //根据品牌获取车型

                function getCarSum(){
                    if($scope.typeSelected){
                        $scope.carsum = $scope.typeSelected.price;
                    }
                } 
                $scope.$watch('typeSelected',getCarSum);   //自动获取总价
                
                $scope.rateSelectModel = Rate.query({data: 'rate'});   //
                $scope.periodModel = Rate.query({data: 'period'});        //


//             $http.get('nativedata/period.json').success(function(data){
//                    $scope.periodModel = data;
//             }).error(function(){
//                    alert('failed');
//             });   
             

                $scope.rateDiscountShow = true;
                $scope.rateShow = true;
                var rateChanged = function() {
                    $scope.rateinput = $scope.rate * $scope.ratediscount;
                    if ($scope.rateinput !== null) {
                        //$scope.rateDiscountShow = false;
                    }
                };

                var rateWatch = $scope.$watch('rate+ratediscount', rateChanged);
                //var rateDiscountWatch = $scope.$watch('ratediscount',rateChanged);
                //$scope.rateinput=  $scope.rateselect * $scope.ratediscount;

//                $scope.calculated = function() {
//                    $scope.rateinput = $scope.rateselect * $scope.ratediscount;
//                    Calculator.ACPIT.I.setVal($scope.carsum, $scope.rateinput, $scope.periodselect);
//                    var totalDate = Calculator.ACPIT.main(null, null);
//
//                    $scope.monthlyCapitalInterest = totalDate.monthly_capital_interest;
//                    $scope.totalInterest = 2;
//                    $scope.totalRepayment = 3;
//                };
//
//                $scope.reset = function() {
//                    $scope.monthlyCapitalInterest = null;
//                    $scope.totalInterest = null;
//                    $scope.totalRepayment = null;
//                };




//                var rateDiscountModel = [{
//                        id: 1001,
//                        name: '无折扣',
//                        discount: 1
//                    }, {
//                        id: 1002,
//                        name: '9折',
//                        discount: 0.9
//                    }, {
//                        id: 1003,
//                        name: '8折',
//                        discount: 0.8
//                    }, {
//                        id: 1004,
//                        name: '7折',
//                        discount: 0.7
//                    }
//                ];
//
//
//                $scope.rateDiscountModel = rateDiscountModel;


            }]);
