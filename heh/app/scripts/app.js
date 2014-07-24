'use strict';

/**
 * @ngdoc overview
 * @name myYoProjectApp
 * @description
 * # myYoProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myYoProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main_one', {
        templateUrl: 'views/main_one.html',
        controller: 'Main_OneCtrl'
      })
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/creat', {
        templateUrl: 'views/creat.html',
        controller: 'CreatCtrl'
      })
        .when('/jingjia_list', {
            templateUrl: 'views/jingjia_list.html',
            controller: 'Jingjia_listCtrl'
        })
        .when('/jingjia_message', {
            templateUrl: 'views/jingjia_message.html',
            controller: 'Jingjia_messageCtrl'
        })

      .otherwise({
        redirectTo: '/'
      });
  });
