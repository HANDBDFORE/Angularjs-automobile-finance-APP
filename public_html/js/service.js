/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('calculatorService', ['ngResource']).
        factory('Rate', ['$resource', function($resource) {
                return $resource('nativedata/:data.json', {}, {
                    queryRate: {method: 'GET', params: {data:'rate'}, isArray: true},
                    queryPeriod:{method: 'GET', params: {data:'period'}, isArray: true}
                });
            }]);