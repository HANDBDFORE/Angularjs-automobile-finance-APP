'use strict';
controllers.controller('CarLoanController', ['$scope', 'Data', function($scope, Data) {


        //$scope.selectedBrand = Brand.getData(); //获取品牌
        $scope.selectedBrand = Data.query({data: 'brand'});

        $scope.a = function() {
            var i = 0;
            for (i; i < $scope.selectedType.length; i++) {
                if ($scope.selectedType[i].name === $scope.$parent.loanModel.typeSelected.name) {
//                    if ($scope.$parent.loanModel.typeSelected.otherPrice === null) {
//                        $scope.$parent.loanModel.typeSelected.otherPrice = 0;
//                    }
                    $scope.$parent.loanModel.typeSelected.price = $scope.selectedType[i].price;
                    $scope.$parent.loanModel.typeSelected.sumPrice = $scope.selectedType[i].price + $scope.$parent.loanModel.typeSelected.otherPrice;
                    $scope.$parent.loanModel.typeSelected.type = $scope.selectedType[i].type;
                    $scope.$parent.loanModel.typeSelected.image = $scope.selectedType[i].image;
                    $scope.$parent.loanModel.typeSelected.brand = $scope.selectedType[i].brand;
                    $scope.$parent.loanModel.typeSelected.brandCN = $scope.selectedType[i].brandCN;
                }
            }
        };   //获取车型数据

        $scope.flag = false;
        function selectType() {
            var brand = $scope.$parent.loanModel.brand;
            if (brand) {
                $scope.flag = true;
                $scope.selectedType = Data.query({data: brand});
            }else if(!brand){
                $scope.loanModel.typeSelected.price = null;
                $scope.loanModel.typeSelected.sumPrice = null;
                $scope.selectedType = null;
                $scope.flag = false;
            }
        }
        ;
        $scope.$watch('loanModel.brand', selectType);   //根据品牌获取车型

        $scope.periodModel = Data.query({data: 'period'});        //  获取期数

        $scope.carloaModel = Data.query({data: 'plan'});      //获取贷款方案

        $scope.downPaymentPercent = function() {
            var downPaymentPercent = $scope.$parent.loanModel.loan.downPaymentPercent;
            var s = $scope.loanModel.typeSelected.price + $scope.loanModel.typeSelected.otherPrice;
            $scope.loanModel.typeSelected.sumPrice = s;
            if (downPaymentPercent !== null) {

                $scope.loanModel.loan.downPaymentAmount = downPaymentPercent * s / 100;
            };
            if (downPaymentPercent === null) {
                $scope.loanModel.loan.downPaymentAmount = null;
            }
        };  //根据首付比例 计算首付金额

        $scope.downPaymentAmount = function() {
            var downPaymentAmount = $scope.$parent.loanModel.loan.downPaymentAmount;
            var s = $scope.loanModel.typeSelected.price + $scope.loanModel.typeSelected.otherPrice;

            if (downPaymentAmount !== null) {
                $scope.loanModel.loan.downPaymentPercent = downPaymentAmount / s * 100;
            };

            if (downPaymentAmount === null) {
                $scope.loanModel.loan.downPaymentPercent = null;
            }
        };     //根据首付金额  计算首付比例


        $scope.calculate = function() {
            var s = $scope.loanModel.typeSelected.price + $scope.loanModel.typeSelected.otherPrice;
            var x = $scope.loanModel.loan.downPaymentPercent / 100;
            var loanname = $scope.loanModel.plan.loanname;
            var n = $scope.loanModel.loan.periodselect;

            if (n === 6) {
                var r = 7.2/1200;
            } 
            else if (n === 12) {
                var r = 8.4/1200;
            } 
            else if (n=== 18){
                var r = 9.6/1200;
            }
            else if (n === 24) {
                var r = 10.8/1200;
            }
            else if (n === 36) {
                var r = 12/1200;
            }

            if (loanname === '标准信贷') {
                $scope.$parent.loanModel.loan.payment = s * (1 - x) * r * (Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
                $scope.loanModel.loan.repayment = 0;
            } 
            else if (loanname === '弹性信贷'){
                $scope.$parent.loanModel.loan.payment = s * (1 - x) * r * ((Math.pow((1 + r), n))-0.25) / (Math.pow((1 + r), n) - (1+r));
                $scope.loanModel.loan.repayment = s*0.25*(1-x);
            }

           // $scope.$parent.loanModel.loan.payment = parseFloat($scope.loanModel.loan.payment.toFixed(2));
            //$scope.loanModel.typeSelected.price = parseFloat($scope.loanModel.typeSelected.price.toFixed(2));
        };


        $scope.reset = function() {
            var nullModel = {
            brand: '',
            typeSelected: {
                brand: '',
                name: '',
                type: '',
                price: null,
                image: '',
                otherPrice:null,
                sumPrice:null
            },
            plan: {
                id: '',
                loanname: '',
                content: '',
                image: ''
            },
            flag: '',
            loan:{
                downPaymentPercent:null,
                downPaymentAmount:null,
                idealPayment:null,
                periodselect:null,
                rate:null,
                payment:null,
                repayment:null
            }
        };
            $scope.loanModel = nullModel;
            location.reload();
//            $scope.loanModel.loan.downPaymentPercent = null;
//            $scope.loanModel.loan.downPaymentAmount = null;
//            $scope.loanModel.loan.periodselect = null;
//            $scope.loanModel.loan.idealPayment = null;
//            $scope.$parent.loanModel.loan.payment = null;
//            $scope.loanModel.loan.repayment = null;
//            $scope.loanModel.typeSelected.otherPrice = null;
//            $scope.loanModel.plan.loanname = null;
//            
        };





//            function idealPaymentChanged() {
//            var s = $scope.loanModel.typeSelected.price + $scope.loanModel.typeSelected.otherPrice;
//            var n = $scope.loanModel.loan.periodselect;
//            //parseFloat(s.toFixed(4));
//            var v = $scope.loanModel.loan.idealPayment;
//
//            if (n === 6) {
//                var r = 0.009;
//            } else if (n === 12) {
//                var r = 0.008;
//            }
//            else if (n === 24) {
//                var r = 0.007;
//            }
//            else if (n === 36) {
//                var r = 0.006;
//            }
//
//            if (v) {
//                $scope.$parent.loanModel.loan.downPaymentPercent = (1 - v * (Math.pow((1 + r), n) - 1) / (s * r * (Math.pow((1 + r), n)))) * 100;
//                $scope.$parent.loanModel.loan.downPaymentPercent = parseFloat($scope.$parent.loanModel.loan.downPaymentPercent.toFixed(4));
//                $scope.$parent.loanModel.loan.downPaymentAmount = s * $scope.$parent.loanModel.loan.downPaymentPercent / 100;
//                $scope.$parent.loanModel.loan.downPaymentAmount = parseFloat($scope.$parent.loanModel.loan.downPaymentAmount.toFixed(2));
//            }
//            ;
//
////            if(v === null)
////            {
////                $scope.$parent.loanModel.loan.downPaymentPercent = null;
////                $scope.$parent.loanModel.loan.downPaymentAmount = null;
////            };
//        }
//        $scope.$watch('loanModel.loan.idealPayment+loanModel.typeSelected.price+loanModel.loan.rate+loanModel.loan.periodselect', idealPaymentChanged);    //根据理想月供额算出首付



    }]);
