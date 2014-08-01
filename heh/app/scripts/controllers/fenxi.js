'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('FenxiCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back=function()
        {
            $location.path('/jingjia')
        }


        var list2=JSON.parse(localStorage.getItem('shus')) || [];
        var name2=localStorage.getItem('TTT');
        $scope.xianshi=function()
        {
            for(var i=0;i<list2.length;i++)
            {
                if(list2[i].shus==name2)
                {
                    $scope.title=list2[i].shus
                    $scope.number=list2[i].messages.length
                    var newshu=JSON.parse(localStorage.getItem("price_p"))
                    $scope.middle=newshu



                    if(list2[i].messages.length==0)
                    {

                    }
                    else
                    {
                        var list_price=JSON.parse(localStorage.getItem("price_p"))
                        var min= _.find(list_price,function(act){return act.count == 1})//先找到最低符合要求的价格
//console.log(min.price)
                        var winner_action= _.find(list2,function(act){return act.shus== name2}).messages //找到所在竞价活动的messages数组
//console.log(winner_action)
                        var winner= _.find(winner_action,function(act){return act.price == min.price}) //找出最低价格
//console.log(winner)
//console.log(winner.name)

                        $scope.winner_name=winner.name
                        $scope.winner_phone=winner.phone
                        $scope.winner_price=winner.price

                    }

                }
            }
        }
        $scope.xianshi()


    })
