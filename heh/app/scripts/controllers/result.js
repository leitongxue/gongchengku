'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('ResultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.back=function()
        {
            $location.path('/jingjia')
        }

        $scope.xianshi=function()
        {
            var list1 = JSON.parse(localStorage.getItem('acticities')) || [];
            var list2 = JSON.parse(localStorage.getItem('shus')) || [];
            var name1 = localStorage.getItem('ttt')
            var name2 = localStorage.getItem('TTT')

            for(var i=0;i<list2.length;i++)
            {
                if (list2[i].shus == name2)
                {

                    var bidList = _.sortBy(list2[i].messages,function(bid){return bid.price});

//                    console.log(bidList)
                    $scope.middle = bidList
                    $scope.number = list2[i].messages.length //显示参与竞价人数
                    $scope.title =list2[i].shus //显示竞价活动名
                }

            }
        }
        $scope.xianshi()

    })