'use strict';
controllers.controller('MainCtrl', ['$scope', function($scope) {
        $scope.loanModel = {
            brand: '',
            typeSelected: {
                brand: '',
                name: '',
                type: '',
                price: null,
                image: ''
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

    }]);

