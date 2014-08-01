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
                        $scope.winner_name="0人"
                    }
                    else
                    {
                        var list_price=JSON.parse(localStorage.getItem("price_p"))
                        for(var k=0;k<list_price.length;k++)
                        {
                            if(list_price[k].count == 1)
                            {
                                var winner=JSON.parse(localStorage.getItem("winner"))
                                $scope.winner_name=winner.name
                                $scope.winner_phone=winner.phone+"  竞价成功！"
                                $scope.winner_price="￥"+winner.price
                            }
                            else
                            {
                                $scope.winner_name="竞价失败！"
                                $scope.winner_phone=""
                                $scope.winner_price=""
                            }
                        }
                    }

                }
            }
        }
        $scope.xianshi()


    })
