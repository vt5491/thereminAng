'use strict';

/**
 * @ngdoc overview
 * @name thereminAngApp
 * @description
 * # thereminAngApp
 *
 * Main module of the application.
 */
angular
  .module('thereminAngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/monad', {
        templateUrl: 'views/monad.html',
        controller: 'MonadCtrl',
        controllerAs: 'monad'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
