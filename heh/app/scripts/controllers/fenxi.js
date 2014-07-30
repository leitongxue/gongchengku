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



        $scope.xianshi=function()
        {
            var list2=JSON.parse(localStorage.getItem('shus')) || [];
            var name2=localStorage.getItem('TTT');
            for(var i=0;i<list2.length;i++)
            {
                if(list2[i].shus==name2)
                {
                    $scope.title=list2[i].shus
                    $scope.number=list2[i].messages.length
                    var bidCount = _.countBy(list2[i].messages,function(bid){return bid.price});
                    var newshu=_.map(bidCount,function(value,key){return {'price':key,'count':value}});
                    $scope.middle=newshu

                }
            }
        }
        $scope.xianshi()























    })
