'use strict';

/**
 * @ngdoc function
 * @name thereminAngApp.controller:MonadCtrl
 * @description
 * # MonadCtrl
 * Controller of the thereminAngApp
 */
angular.module('thereminAngApp')
  .controller('MonadCtrl', function ($scope, monad) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
monad.init();
monad.mainLoop();

//webvr-decorator-> file updated on: 1/7/2016, 8:29:15 PM
  });


