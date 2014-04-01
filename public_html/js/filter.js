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
        filter('PriceFilter', function() {
            var priceFilter = function(input) {
                if (!input) {
                    input = 0;
                }
                ;
                return (input / 10000).toString() + '万';
            };
            return priceFilter;
        }).
        filter('NumberSplit', function() {
            var numberSplit = function(input) {


                //return s_temp;
                return input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            };
            return numberSplit;
        }).
        filter('Decimal', function() {
            var decimal = function(input) {

                var temp = Math.round(input * 100) / 100;
                var s_temp = temp.toString();
                var pos_decimal = s_temp.indexOf('.');

                if (pos_decimal < 0) {
                    pos_decimal = s_temp.length;
                    s_temp += '.';
                }

                while (s_temp.length <= pos_decimal + 2) {
                    s_temp += '0';
                }
                s_temp = parseInt(s_temp);
                
                return parseInt(s_temp);
            };
            return decimal;
        })
        ;







