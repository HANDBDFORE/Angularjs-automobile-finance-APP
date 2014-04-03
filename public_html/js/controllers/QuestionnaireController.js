'use strict';
controllers.controller('QuestionnaireController', ['$scope', '$state', 'Loan', function($scope, $state, Loan) {
        $scope.Dialog1yes = function() {
            self.location = '#/loanplan?id=1001'; //跳转到标准信贷
//            $state.go('loanplan',{id:1001});
        };
        $scope.Dialog1no = function() {
            $scope.modalShown = false;
        };
        $scope.Q1cancle = function() {
            $state.go('financialplan');
        };
        $scope.Q1yes = function() {
            Loan.query({data: 'plan'}, function(data) {
                angular.forEach(data, function(value) {
                    if (value.id === '1001') {
                        $scope.$parent.loanModel.plan = value;
                        $state.go('loanplan');
                    }

                });
            });
        };
        $scope.Q1no = function() {
            $state.go('financialplan');
        };
        $scope.Q2yes = function() {
            $scope.$parent.loanModel.flag = 'true';
            $state.go('financialplan');
        };
        $scope.Q2no = function() {
            $state.go('financialplan');
        };
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };
        function showPosition(position) {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;
            alert('latitude:' + $scope.lat + '\nlongitude:' + $scope.lng);
        }
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred.";
                    break;
            }
        }
        ;
        $scope.getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition, showError);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        };

    }]);