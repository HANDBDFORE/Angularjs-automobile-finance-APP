'use strict';
controllers.controller('CarLoanController', ['$scope', 'Rate', 'Brand', 'Type', 'Calculator', function($scope, Rate, Brand, Type) {


        $scope.selectedBrand = Brand.getData(); //获取品牌

        function selectType() {
                  
            var brand = $scope.$parent.loanModel.brand;
            if (brand) {
                $scope.selectedType = Type.query({type: brand});

            } else {
//                $scope.selectedType = null;
//                $scope.$parent.loanModel.typeSelected = {};
            }
        }
        $scope.$watch('loanModel.brand', selectType);   //根据品牌获取车型

        $scope.periodModel = Rate.query({data: 'period'});        //  获取期数

        function idealPaymentChanged() {
            var s = $scope.loanModel.typeSelected.price;
            var v = $scope.loanModel.loan.idealPayment;
            var r = $scope.loanModel.loan.rate/1200;
            var n = $scope.loanModel.loan.periodselect;
            
            if (v) {
                $scope.$parent.loanModel.loan.downPaymentPercent = (1-v*(Math.pow((1+r),n)-1)/(s*r*(Math.pow((1+r),n))))*100;
                $scope.$parent.loanModel.loan.downPaymentAmount = s*$scope.$parent.loanModel.loan.downPaymentPercent/100;
            } else
            {
//                $scope.$parent.loanModel.loan.downPaymentPercent = null;
//                $scope.$parent.loanModel.loan.downPaymentAmount = null;
            }
        }
        $scope.$watch('loanModel.loan.idealPayment+loanModel.typeSelected.price+loanModel.loan.rate+loanModel.loan.periodselect', idealPaymentChanged);    //根据理想月供额算出首付

        function downPaymentPercent(){
            if($scope.$parent.loanModel.loan.downPaymentPercent){
                $scope.loanModel.loan.downPaymentAmount = $scope.loanModel.loan.downPaymentPercent*$scope.loanModel.typeSelected.price/100;
            }
        }

        $scope.$watch('loanModel.loan.downPaymentPercent',downPaymentPercent);
        
//        function downPaymentPercent(){
//            if($scope.$parent.loanModel.loan.downPaymentAmount){
//                $scope.loanModel.loan.downPaymentPercent = $scope.loanModel.loan.downPaymentAmount/$scope.loanModel.typeSelected.price*100;
//            }else{
////                $scope.loanModel.loan.downPaymentPercent = null;
//            }
//        }
//
//        $scope.$watch('loanModel.loan.downPaymentAmount',downPaymentPercent);
        
        
        $scope.calculate = function (){
            var s = $scope.loanModel.typeSelected.price;
            var x = $scope.loanModel.loan.downPaymentPercent/100;
            var r = $scope.loanModel.loan.rate/1200;
            var n = $scope.loanModel.loan.periodselect;
            //alert('asdafs');
         //   V=S(1-x%)r(1+r)n/[(1+r)n-1]  

            $scope.$parent.loanModel.loan.payment = s*(1-x)*r*(Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
            
            $scope.loanModel.loan.repayment = 0;
        };
//        
//        function downPaymentAmount
//

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
