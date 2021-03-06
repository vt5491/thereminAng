'use strict';

/**
 * @ngdoc function
 * @name thereminAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thereminAngApp
 */
angular.module('thereminAngApp')
  .controller('MainCtrl',['$scope', 'thereminApp', 'monad', function ($scope, thereminApp, monad) {
    thereminApp.init();

    $scope.start = function () {
      monad.init();
      monad.mainLoop();
      
      thereminApp.start();
    };

    $scope.stop = function () {
      thereminApp.stop();
    };

    $scope.addOvertone = function (checked, multiplier) {
      thereminApp.addOvertone(checked, multiplier);
    };

    $scope.setWaveType = function (wave_type) {
      thereminApp.setWaveType(wave_type);
    };

    $scope.setThereminType = function (theremin_type) {
      thereminApp.setThereminType(theremin_type);
    };

    $scope.invertFreq = function (checked) {
      thereminApp.invertFreq = checked;
      thereminApp.bindController();
    };
  }]);
