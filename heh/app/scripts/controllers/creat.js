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
                {
                gg[i].tureth = "true";
                localStorage.setItem("activities", JSON.stringify(gg));
                }
            }
            }

//        for (var j in active) {
//            if (active[j].actname == localStorage.working_activity) {
//                if (active[j].activity_status == 'true') {
//                    $scope.switch = "false"
//                } else {
//                    $scope.switch = "true"
//                }
//            }
//        }
//        for(var k in gg)
//        {
//            if(gg[k]==localStorage.getItem('ttt'))
//            {
//                if(gg[k].messages=='false')
//                {
//                    $scope.log="false"
//                }
//                else
//                {
//                    $scope.log="true"
//                }
//            }
//

        
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

    });
