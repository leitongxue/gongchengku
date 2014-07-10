/**
 * Created by lei on 14-7-10.
 */
'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #CreatCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('Main_twoCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back="返回";
        $scope.go_back=function(){
            $location.path('/list')
        }
        $scope.register="创建活动";
        $scope.go_register=function(){
            $location.path('/creat')
        }

    });
