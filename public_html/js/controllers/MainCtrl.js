'use strict';
controllers.controller('MainCtrl', ['$scope', function($scope) {
                $scope.$on("Resize", function(event, msg) {
                    alert('!');
                });
            }]);

