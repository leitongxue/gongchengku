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


        $scope.diaoyong=function()
        {
            var gg = JSON.parse(localStorage.getItem('shus')) || [];
            var oo = localStorage.getItem('TTT')
            for(var i=0;i<gg.length;i++)
            {
                if (gg[i].shus == oo)
                {
                    $scope.middle = gg[i].messages
                    $scope.number = gg[i].messages.length
                    $scope.title =gg[0].shus
                }

            }
        }
        $scope.diaoyong()


        //结束按钮
        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        $scope.end=function()
        {
            if (confirm("你确定要结束竞价吗？"))
            {

                var gg = JSON.parse(localStorage.getItem('activities')) || [];
                for (var k=0;k<gg.length;k++)
                {
                    var oo = localStorage.getItem('ttt')
                    if(gg[k].activity==oo)
                    {
                        gg[k].bid_status="false"
                        localStorage.setItem("activities", JSON.stringify(gg));
                    }
                }


                if(shus[0].color == "true")
                {
                    shus[0].color = "false"
                    localStorage.setItem("shus", JSON.stringify(shus))
                    $scope.xian=true
                }
            }
            $location.path('/result')
        }

        //竞价信息页面结束按钮的可点不可点
        for(var i=0;i<shus.length;i++)
        {
            var oo = localStorage.getItem('TTT')
            if (shus[i].shus == oo)
            {
                if (shus[i].color == "true")
                {
                    $scope.log=false
                }
                else{$scope.xian=true}
            }
        }


    })