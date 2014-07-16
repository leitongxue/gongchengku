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
        $scope.list1 = JSON.parse(localStorage.getItem('activities'))||[];


        $scope.next="创建活动";
        $scope.go_next=function(){
            $location.path('main_one');
        }


        function xuan() {
            var choose = JSON.parse(localStorage.getItem('activities')) || [];
            if (choose.length == 0) {
                $location.path('/main_one');
            }
            else {

            }
        }

        xuan()

    }


);
