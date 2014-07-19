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
        $scope.go_backing=function()
        {
            $location.path('/list')
        }


        var gg = JSON.parse(localStorage.getItem('activities'))||[];
        for (var i = 0; i < gg.length; i++)
        {
            $scope.middle = gg[i].messages

        }

        $scope.log="true";
        $scope.hh=function()
        {
            $scope.log="false";
            var tureth={"log":"log"}
            for(var i=0;i<gg.length;i++)
            {
                var oo=localStorage.getItem('ttt')
                if(gg[i].activity==oo)
                gg[i].tureth = "true";
                localStorage.setItem("activities", JSON.stringify(gg));
                }
            }

        $scope.HH=function firm()
        {
            if (confirm("你确定要退出活动吗？"))
            {
                $scope.log="true"
                $scope.log="false";
                var tureth={"log":"log"}
                for(var i=0;i<gg.length;i++)
                {
                    var oo=localStorage.getItem('ttt')
                    if(gg[i].activity==oo)
                        gg[i].tureth = "false";
                    localStorage.setItem("activities", JSON.stringify(gg));
                }
            }

        }

//        console.log($scope.choose_true="false")

//        $scope.choose_true=function()
//        {
//
//        }

    });
