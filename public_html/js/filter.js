/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('calculatorFilter', []).
        filter('PercentFilter', function() {
            var pecentFilter = function(input) {
                return input / 100;
            };
            return pecentFilter;
        }).
        filter('PriceFilter',function(){
            var priceFilter = function(input){
                if(!input){
                    input = 0;
                };
                return (input / 10000).toString()+'万';
            };
            return priceFilter;
        });


