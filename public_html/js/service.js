/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('calculatorService', ['ngResource']).
        factory('Rate', ['$resource', function($resource) {
                return $resource('nativedata/:data.json', {},{
                    query: {  
                                method: "GET",  
                                params: {data: "@data"},  
                                isArray: true  
                            } 
                });
            }]).
        factory('Brand', ['$resource', function($resource) {
//                return $resource('http://10.213.214.91:80/brand.php/', {},{
//                    getData:{method:'GET',params:{},isArray:true}
//                  
//                });
                return $resource('nativedata/brand.json',{},{
                      getData:{method:'GET',params:{},isArray:true}
                });
            }]).
        factory('Type', ['$resource', function($resource) {
                return $resource('nativedata/:data.json', {},{
                      get:{method:'GET',params:{data: '@data'},isArray:true}
                });
//            }]).
//                factory('Type', ['$resource','$scope', function($resource,$scope) {
//                return $resource('http://10.213.214.91/type.php', {},{
//                    getType:{method:'GET',params:{brand:$scope.brand},isArray:true}
//                });
            }]).
        factory('Loan', ['$resource', function($resource) {
                return $resource('nativedata/:data.json', {data: '@data'},{
                      query:{method:'GET',isArray:false}
                });
            }]);