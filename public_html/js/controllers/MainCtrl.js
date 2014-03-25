'use strict';
controllers.controller('MainCtrl', ['$scope', function($scope) {
        $scope.loanModel = {
            brand:'',
            typeSelected: {
                brand: '',
                name: '',
                type: '',
                price: null,
                image: ''
            },
            loan:{
                downPaymentPercent:null,
                downPaymentAmount:null,
                idealPayment:null,
                periodselect:null,
                rate:null
            }
        };
    }]);

