'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:Main OneCtrl
 * @description
 * # Main oneCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
  .controller('Main_OneCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
     ];

            $scope.register = "创建";
            $scope.go_register = function () {
                jump()
                $location.path('/creat')

            };

                  //          数组
           function jump() {
               var activity = $scope.change;
               console.log(activity);
               var activities = JSON.parse(localStorage.getItem('activities')) || [];

               activities.unshift(activity);

               localStorage.setItem("activities", JSON.stringify(activities));

           }

}

)
