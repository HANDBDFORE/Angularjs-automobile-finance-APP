'use strict';
controllers.controller('CarLoanController', ['$scope', 'Rate', 'Brand', 'Type', 'Calculator', function($scope, Rate, Brand, Type) {


        $scope.selectedBrand = Brand.getData(); //获取品牌

        $scope.a = function() {
            var i = 0;
            for (i; i < $scope.selectedType.length; i++) {
                if ($scope.selectedType[i].name === $scope.$parent.loanModel.typeSelected.name) {
                    $scope.$parent.loanModel.typeSelected.price = $scope.selectedType[i].price;
                    $scope.$parent.loanModel.typeSelected.type = $scope.selectedType[i].type;
                    $scope.$parent.loanModel.typeSelected.image = $scope.selectedType[i].image;
                    $scope.$parent.loanModel.typeSelected.brand = $scope.selectedType[i].brand;
                }
            }
        };

        function selectType() {
            var brand = $scope.$parent.loanModel.brand;
            if (brand) {
                $scope.selectedType = Type.query({data: brand});
            } else {
//                $scope.selectedType = null;
//                $scope.$parent.loanModel.typeSelected = {};
            }
        }
        $scope.$watch('loanModel.brand', selectType);   //根据品牌获取车型

        $scope.periodModel = Rate.query({data: 'period'});        //  获取期数


        function idealPaymentChanged() {
            var s = $scope.loanModel.typeSelected.price;
            var n = $scope.loanModel.loan.periodselect;
            //parseFloat(s.toFixed(4));
            var v = $scope.loanModel.loan.idealPayment;

            if (n === 6) {
                var r = 0.009;
            } else if (n === 12) {
                var r = 0.008;
            }
            else if (n === 24) {
                var r = 0.007;
            }
            else if (n === 36) {
                var r = 0.006;
            }

            if (v) {
                $scope.$parent.loanModel.loan.downPaymentPercent = (1 - v * (Math.pow((1 + r), n) - 1) / (s * r * (Math.pow((1 + r), n)))) * 100;
                $scope.$parent.loanModel.loan.downPaymentPercent = parseFloat($scope.$parent.loanModel.loan.downPaymentPercent.toFixed(4));
                $scope.$parent.loanModel.loan.downPaymentAmount = s * $scope.$parent.loanModel.loan.downPaymentPercent / 100;
                $scope.$parent.loanModel.loan.downPaymentAmount = parseFloat($scope.$parent.loanModel.loan.downPaymentAmount.toFixed(2));
            }; 
                
//            if(v === null)
//            {
//                $scope.$parent.loanModel.loan.downPaymentPercent = null;
//                $scope.$parent.loanModel.loan.downPaymentAmount = null;
//            };
        }
        $scope.$watch('loanModel.loan.idealPayment+loanModel.typeSelected.price+loanModel.loan.rate+loanModel.loan.periodselect', idealPaymentChanged);    //根据理想月供额算出首付

        $scope.downPaymentPercent = function() {
            var downPaymentPercent = $scope.$parent.loanModel.loan.downPaymentPercent;
            var price = $scope.loanModel.typeSelected.price;
            if (downPaymentPercent !== null) {
                $scope.loanModel.loan.downPaymentAmount = downPaymentPercent * price / 100;
                $scope.loanModel.loan.downPaymentAmount = parseFloat($scope.loanModel.loan.downPaymentAmount.toFixed(2));
//                var userreg = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
//                if (userreg.test(document.getElementById("co_id").value)) {
//                    alert("ok");
//                    return true;
//                } else {
//                    alert("请输入合法数字,非负整数或小数[小数最多精确到小数点后两位]！");
//                    document.getElementById("co_id").focus;
//                    return false;
//                }   
            }
            ;

            if(downPaymentPercent === null){
                $scope.loanModel.loan.downPaymentAmount = null;
            }
        };
        
        $scope.downPaymentAmount = function(){
            var downPaymentAmount = $scope.$parent.loanModel.loan.downPaymentAmount;
            var price = $scope.loanModel.typeSelected.price;
            if(downPaymentAmount !== null){
                $scope.loanModel.loan.downPaymentPercent = downPaymentAmount/price*100;
                $scope.loanModel.loan.downPaymentPercent = parseFloat($scope.loanModel.loan.downPaymentPercent.toFixed(4));
            };
            
            if(downPaymentAmount === null){
                $scope.loanModel.loan.downPaymentPercent = null;
            }
        };        

//        function downPaymentPercent() {
//            var downPaymentPercent = $scope.$parent.loanModel.loan.downPaymentPercent;
//            var price = $scope.loanModel.typeSelected.price;
//            if (downPaymentPercent !== null) {
//                $scope.loanModel.loan.downPaymentAmount = downPaymentPercent * price / 100;
//            }
//            ;
//
//            if(downPaymentPercent === null){
//                $scope.loanModel.loan.downPaymentAmount = 0;
//            }
//        }
//
//        $scope.$watch('loanModel.loan.downPaymentPercent', downPaymentPercent);


        $scope.calculate = function() {
            var s = $scope.loanModel.typeSelected.price;
            var x = $scope.loanModel.loan.downPaymentPercent / 100;

            var n = $scope.loanModel.loan.periodselect;

            if (n === 6) {
                var r = 0.009;
            } else if (n === 12) {
                var r = 0.008;
            }
            else if (n === 24) {
                var r = 0.007;
            }
            else if (n === 36) {
                var r = 0.006;
            }

            $scope.$parent.loanModel.loan.payment = s * (1 - x) * r * (Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
            $scope.$parent.loanModel.loan.payment = parseFloat($scope.loanModel.loan.payment.toFixed(2));
            $scope.loanModel.loan.repayment = 0;
        };


        $scope.reset = function() {
            $scope.loanModel.loan.downPaymentPercent = null;
            $scope.loanModel.loan.downPaymentAmount = null;
            $scope.loanModel.loan.periodselect = null;
            $scope.loanModel.loan.idealPayment = null;
            $scope.$parent.loanModel.loan.payment = null;
            $scope.loanModel.loan.repayment = null;
        };

    }]);
