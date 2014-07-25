'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #Money_MessageCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('Money_MessageCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back=function()
        {
            $location.path('/jingjia')
        }
    })