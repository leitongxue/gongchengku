'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('JingjiaCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var gg = JSON.parse(localStorage.getItem('activities')) || [];

        $scope.move=function()
        {
        for (var i = 0; i < gg.length; i++)
        {
            if (gg[i].tureth == "true"){}
            else
            {
                    var shu={"shus":"shu","messages":[],"color":"color"}
                    var shus = JSON.parse(localStorage.getItem('shus')) || [];
                    shus.unshift(shu);
                    localStorage.setItem("shus", JSON.stringify(shus));
                    $location.path('/Money_message')

                    var shus = JSON.parse(localStorage.getItem('shus')) || [];
                    shus[0].shus="竞价"+shus.length
                    localStorage.setItem("shus",JSON.stringify(shus))
                    break
            }


//                if(){}
        }
        }
        $scope.list2=JSON.parse(localStorage.getItem('shus'))||[];
        $scope.back=function()
        {
            $location.path('/creat')
        }
    })