'use strict';
controllers.controller('CarSelectController', ['$scope', 'Type', 'Brand', function($scope, Type, Brand) {
                $scope.selectBrand = Brand.getData();

                function selectType() {
                    var brand = $scope.$parent.loanModel.brand;
                    if (brand) {
                        $scope.selectedType = Type.query({type: brand});
                    }
                };
                function toquestionnaire(){
                    var price = $scope.$parent.loanModel.typeSelected.price;
//                    debugger;
                    if(price){
                        self.location = '#/questionnaire';
                    }
                };
                $scope.$watch('loanModel.brand', selectType);
                $scope.$watch('loanModel.typeSelected',toquestionnaire);
            }]);