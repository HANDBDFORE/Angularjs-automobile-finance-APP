'use strict';
controllers.controller('CarSelectController', ['$scope', 'Type', 'Brand', function($scope, Type, Brand) {
                $scope.selectBrand = Brand.getData();

                function selectType() {
                    if ($scope.brand) {
                        $scope.selectType = Type.query({type: $scope.brand});
                    }
                }
                $scope.$watch('brand', selectType);
            }]);