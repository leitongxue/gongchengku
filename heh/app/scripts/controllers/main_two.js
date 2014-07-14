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
        $scope.back = "返回";
        $scope.go_back = function () {
            $location.path('/list')
        }
        $scope.register = "创建";
        $scope.go_register = function () {
            $location.path('/creat')
        }



        function jump() {
            var activity = $scope.change;

            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            activities.push(activity)
            localStorage.setItem("activities", JSON.stringify(activities));


        }



    }
        )
