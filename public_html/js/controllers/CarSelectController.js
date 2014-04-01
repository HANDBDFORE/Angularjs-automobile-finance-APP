'use strict';
controllers.controller('CarSelectController', ['$scope', 'Type', 'Brand', function($scope, Type, Brand) {
        $scope.selectBrand = Brand.getData();
        $scope.a = function(){
            
        var i =0;    
           
            for(i;i<$scope.selectedType.length;i++){
                if($scope.selectedType[i].name === $scope.$parent.loanModel.typeSelected.name){
                    $scope.$parent.loanModel.typeSelected.price = $scope.selectedType[i].price;
                    $scope.$parent.loanModel.typeSelected.type = $scope.selectedType[i].type;
                    $scope.$parent.loanModel.typeSelected.image = $scope.selectedType[i].image;
                    $scope.$parent.loanModel.typeSelected.brand = $scope.selectedType[i].brand;
                    $scope.$parent.loanModel.typeSelected.brandCN = $scope.selectedType[i].brandCN;
                }
            }
             
        };
        function selectType() {
            var brand = $scope.$parent.loanModel.brand;
            if (brand) {
                $scope.selectedType = Type.query({data: brand});
            }
        }
        ;
        $scope.toquestionnaire = function() {
            self.location = '#/questionnaire';

        };
        $scope.$watch('loanModel.brand', selectType);
//                $scope.$watch('loanModel.typeSelected',toquestionnaire);
 }]);