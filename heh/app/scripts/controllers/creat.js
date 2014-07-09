'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #CreatCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('CreatCtrl', function ($scope,$return,$table) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back="返回";
        $scope.go_back=function(){
            $return.path('/main')
        }
        $scpe.list="创建列表";
        $scope.go_table=function(){
            $table.path('/main two')
        }
    });
