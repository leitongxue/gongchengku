'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #CreatCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('CreatCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.backing="返回";
        $scope.go_backing=function(){
            $location.path('/list')
        }

        $scope.middle = JSON.parse(localStorage.getItem('activities'))||[];

        $scope.log="true";
        $scope.hh=function(){$scope.log="false"}


        $scope.HH=function firm()
        {
            if (confirm("你确定提交吗？"))
            {
               $scope.log="true"
            }
        }

    });
