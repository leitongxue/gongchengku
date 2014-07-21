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
//开始按钮
        $scope.hh=function()
        {
            $scope.log="false";
            var tureth={"log":"log"}
            for(var i=0;i<gg.length;i++)
            {
                var oo=localStorage.getItem('ttt')
                if(gg[i].activity==oo)
                {
                gg[i].tureth = "true";

                localStorage.setItem("activities", JSON.stringify(gg));
                }
            }
            }



//结束按钮
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

        //开始按钮的显隐，当tureth数组中有一个true，按钮不可点
        function start_change ()
        {
            for(var i=0;i<gg.length;i++)
            {
                console.log(gg[i].tureth);
                if(gg[i].tureth=="true")
                {
                    $scope.start_change=true;
                    break;
                }
                else
                {
                    $scope.start_change=false;
                }
            }
        }
        start_change();
//        console.log($scope.start_change);
    });
