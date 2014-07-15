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
        $scope.show1=false;

        $scope.inputstatus = function()
        {
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            for(var i=0;i<activities.length;i++)
            {
                if(activities[i]==$scope.change)
                {
                    $scope.show1=true;
                    break;
                }
                else{
                    $scope.show1=false;
                }
//                console.log($scope.show1);
            }
        }

        $scope.back = "返回";
        $scope.go_back = function () {
            $location.path('/list')
        }

        $scope.register = "创建";
        $scope.go_register = function () {
            jump()
            if($scope.show1 == false)
            {
                $location.path('/creat');


            }

        };

                  //          数组
           function jump() {
               if($scope.show1==false)
               {
               var activity = $scope.change;
//               console.log(activity);
               var activities = JSON.parse(localStorage.getItem('activities')) || [];

               activities.unshift(activity);
               localStorage.setItem("activities", JSON.stringify(activities));

           }
           }

            $scope.see=localStorage.getItem('activities');

}

)
