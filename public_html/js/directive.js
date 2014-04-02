/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
angular.module('directiveModule', []).
        directive('formatCurrency', function() {
        
//                return {
//                    require: "ngModel",
//                    link: function(scope, ele, attrs, ctrl) {
//                        ctrl.$parsers.unshift(function(viewValue) {
//                            
//                            return viewValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//
//                            
////                            if (FLOAT_REGEXP.test(viewValue)) {
////                                ctrl.$setValidity("float", true);
////                                return parseFloat(viewValue.replace(",", "."));
////                            } else {
////                                ctrl.$setValidity("float", false);
////                                return undefined;
////                            }
////                                            
//                        });
//                    }
//                };

        });

