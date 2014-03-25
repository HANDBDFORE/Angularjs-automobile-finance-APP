'use strict';
controllers.controller('CarLoanController', ['$scope', 'Rate', 'Brand', 'Type', 'Calculator', function($scope, Rate, Brand, Type) {
        
        
        $scope.selectedBrand = Brand.getData(); //获取品牌

        function selectType() {
           var brand = $scope.$parent.loanModel.typeSelected.brand;
            if (brand) {
                $scope.selectedType = Type.query({type: brand});
//                $scope.$parent.loanModel.typeSelected.price = null;
//                $scope.$parent.loanModel.typeSelected.name = null;
//                $scope.$parent.loanModel.typeSelected.type = null;
            }
        }
        $scope.$watch('loanModel.typeSelected.brand', selectType);   //根据品牌获取车型
//
//        function getCarSum() {
//            if ($scope.typeSelected) {
//                $scope.$parent.carsum = $scope.typeSelected.price;
//            }
//        }
//        $scope.$watch('typeSelected', getCarSum);   //自动获取总价

        // $scope.rateSelectModel = Rate.query({data: 'rate'});   //
        $scope.periodModel = Rate.query({data: 'period'});        //  获取期数

        var rate = 0.05;
        function idealPaymentChanged() {
            //$scope.downPaymentPercent = 1-$scope.idealPayment*((Math.pow(1+rate,$scope.periodModel)-1))/($scope.carsum*rate*Math.pow((1+rate),$scope.periodModel));
            if ($scope.idealPayment) {
                
               // X%=1-v[(1+r)n-1]/sr(1+r)n;
                $scope.downPaymentPercent = 1-$scope.idealPayment*(Math.pow((1+$scope.rate),$scope.periodselect)-1)/$scope.carsum*$scope.rate*(Math.pow((1+$scope.rate),$scope.periodselect));
               // $scope.downPaymentPercent = $scope.downPaymentPercent+100;
                $scope.downPaymentAmount = 10;
            } else
            {
                $scope.downPaymentPercent = null;
                $scope.downPaymentAmount = null;
            }
        }
        $scope.$watch('idealPayment', idealPaymentChanged);    //根据理想月供额算出首付

        var rateChanged = function() {
//            $scope.rateinput = $scope.rate * $scope.ratediscount;
//            if ($scope.rateinput !== null) {
//                //$scope.rateDiscountShow = false;
//            }

            $scope.cardata = $scope.downPaymentPercent;


        };

        var rateWatch = $scope.$watch('downPaymentAmount', rateChanged);



        //carData.carsum = $scope.selectedBrand;
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
