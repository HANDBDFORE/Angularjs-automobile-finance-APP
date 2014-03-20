'use strict';
controllers.controller('CarSelectController', ['$scope', 'Type', 'Brand', function($scope, Type, Brand) {
                $scope.selectBrand = Brand.getData();
//                $http.get('http://10.213.214.91:80/brand.php/').success(function(data) {
//                    $scope.selectBrand = data;
//                }).error(function() {
//                    alert('failed');
//                });

                function selectType() {
                    if ($scope.brand) {
                        $scope.selectType = Type.query({type: $scope.brand});
//                        $scope.selectType = Type.getType();
//                        $http.get('http://10.213.214.91:80/type.php?brand=' + $scope.brand).success(function(data) {
//                            $scope.selectType = data;
//
//                        });
                    }
                }
                $scope.$watch('brand', selectType);
            }]);