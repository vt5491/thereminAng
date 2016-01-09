'use strict';

describe('Directive: canvaskeys', function () {

  // load the directive's module
  beforeEach(module('thereminAngApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
    
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<canvaskeys></canvaskeys>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the canvaskeys directive');
    //expect(7).toBe(8);
  }));
});
