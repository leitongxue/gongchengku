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
            for(i=0;i<gg.length;i++)
            {
                if (gg[i].shus == oo)
                {
                    $scope.middle = gg[i].messages
                    $scope.number = gg[i].messages.length
                }
                else {}
            }
        }
        $scope.diaoyong()


        //结束按钮
        var shus = JSON.parse(localStorage.getItem('shus')) || [];
        $scope.end=function()
        {
            if (confirm("你确定要结束竞价吗？"))
            {
                if(shus[0].color == "true")
                {
                    shus[0].color = "false"
                    localStorage.setItem("shus", JSON.stringify(shus))
                }
            }
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