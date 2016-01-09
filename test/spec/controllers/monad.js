'use strict';

describe('Controller: MonadCtrl', function () {

  // load the controller's module
  beforeEach(module('thereminAngApp'));

  var MonadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonadCtrl = $controller('MonadCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
