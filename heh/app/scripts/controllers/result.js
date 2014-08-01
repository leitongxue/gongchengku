'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('ResultCtrl', function ($scope, $location,$timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.back=function()
        {
            $location.path('/jingjia')
        }
        var list2 = JSON.parse(localStorage.getItem('shus')) || [];
        var name2 = localStorage.getItem('TTT')

        $scope.xianshi=function()
        {
            for(var i=0;i<list2.length;i++)
            {
                if (list2[i].shus == name2)
                {
                    var bidList = _.sortBy(list2[i].messages,function(bid){return bid.price});
                    $scope.middle = bidList
                    $scope.number = list2[i].messages.length //显示参与竞价人数
                    $scope.title =list2[i].shus //显示竞价活动名
                    var bidCount = _.countBy(list2[i].messages,function(bid){return bid.price});
                    var newshu=_.map(bidCount,function(value,key){return {'price':key,'count':value}});
                    localStorage.setItem("price_p", JSON.stringify(newshu))



                    if(list2[i].messages.length==0)
                    { $scope.winner_name="0人"}
                    else {
                        var list_price = JSON.parse(localStorage.getItem("price_p"))
                    //console.log(list_price)
                        var min = _.find(list_price, function (act) {return act.count == 1})//先找到最低符合要求的价格
                    //console.log(min.price)
                        var winner_action = _.find(list2, function (act) { return act.shus == name2}).messages //找到所在竞价活动的messages数组
                    //console.log(winner_action)
                        var winner = _.find(winner_action, function (act) { return act.price == min.price}) //找出最低价格
                    //console.log(winner)
                    //console.log(winner.name)

                        $scope.winner_name = winner.name
                        $scope.winner_phone = winner.phone
                        $scope.winner_price ="￥"+winner.price


                        $('#ModalSuccess').modal("show");
                        $timeout(function () {
                            $('#ModalSuccess').modal('hide');
                        }, 2000)
                    }

                }
            }
        }
        $scope.xianshi()




})