'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * #JingjiaCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
    .controller('JingjiaCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var gg = JSON.parse(localStorage.getItem('activities')) || [];

        $scope.move = function (shus) {
            for (var i = 0; i < gg.length; i++) {
                if (gg[i].tureth == "true") {
                }
                else {
                    //定义数组
                    var shu = {"shus": "shu", "messages": [], "color": "false"}
                    var shus = JSON.parse(localStorage.getItem('shus')) || [];
                    shus.unshift(shu);
                    localStorage.setItem("shus", JSON.stringify(shus));
                    var shus = JSON.parse(localStorage.getItem('shus')) || [];
                    console.log(shus.length)

                    //点击开始按钮，竞价活动+1
                    var shus = JSON.parse(localStorage.getItem('shus')) || [];
                    shus[0].shus = "竞价" + shus.length
                    shus[0].color = "true"
                    localStorage.setItem("shus", JSON.stringify(shus))
                    localStorage.TTT = shus[0].shus;
                    $location.path('/Money_message')
                    break
                }
            }
        }

        function dian() {
            var shus = JSON.parse(localStorage.getItem('shus')) || [];
            for (var k = 0; k < shus.length; k++) {
                if (shus[k].color == "true") {
                    $scope.dian = true;
                    break;
                }
                else {
                    $scope.dian = false;
                }
            }

        }

        dian()
        //取出点击的竞价名
        $scope.next = function (shus) {
            console.log(shus)
            localStorage.TTT = shus.shus;
            $location.path('/Money_message')
        }

        $scope.list2 = JSON.parse(localStorage.getItem('shus')) || [];
        $scope.back = function () {
            $location.path('/creat')
        }
    })