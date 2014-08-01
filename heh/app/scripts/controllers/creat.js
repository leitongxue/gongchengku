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
        var gg = JSON.parse(localStorage.getItem('activities')) || [];

//选择显示；页面刷新
         $scope.diaoyong=function()
         {
            var gg = JSON.parse(localStorage.getItem('activities')) || [];
            for (var i = 0; i < gg.length; i++)
            {
                var oo = localStorage.getItem('ttt')
                if (gg[i].activity == oo)
                {
                    $scope.middle = gg[i].messages
                    $scope.number = gg[i].messages.length
                }
            }
        }
        $scope.diaoyong()


//控制当一个活动开始报名后，此活动显示结束按钮，其余活动显示开始按钮
        $scope.log="true";
        for(var i=0;i<gg.length;i++)
        {
            var oo = localStorage.getItem('ttt')
            if (gg[i].activity == oo)
            {
                if (gg[i].tureth == "true")
                {
                    $scope.log="false"
                }
            }
        }

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
            var gg = JSON.parse(localStorage.getItem('activities'))||[];
            if (confirm("你确定要退出活动吗？"))
            {
                $scope.log="true"
                var tureth={"log":"log"}
                for(var i=0;i<gg.length;i++)
                {
                    var oo=localStorage.getItem('ttt')
                    if(gg[i].activity==oo)
                        gg[i].tureth = "false";
                    localStorage.setItem("activities", JSON.stringify(gg));
                }
                $location.path('/jingjia')
            }

            return;//处理有活动接受到报名信息后点击结束按钮，开始按钮显示但不可点问题
        }


 //开始按钮的显隐，当tureth数组中有一个true，按钮不可点
        function start_change ()
        {
            for(var i=0;i<gg.length;i++)
            {
                var shus = JSON.parse(localStorage.getItem('shus')) || [];
                if(gg[i].tureth=="true" || gg[i].bid_status=="true")
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

    });

