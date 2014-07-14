'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
  .controller('ListCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.next="创建活动";
        $scope.go_next=function(){
            $location.path('main_two')
        }

        $scope.list1=JSON.parse(localStorage.getItem('activities')) || [];
//        function first(){
//            $scope.first = JSON.parse(localStorage.getItem('messages')) || [];
//
//
//        }
//            first();

    }


);
