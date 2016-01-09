'use strict';
 
describe('Service: monad', function () {

  // load the service's module
  beforeEach(module('thereminAngApp'));

  // instantiate service
  var monad;
  beforeEach(inject(function (_monad_) {
    monad = _monad_;
  }));

  it('should do something', function () {
    expect(!!monad).toBe(true);
  });

  // it('doSomething should return 7'), function () {
  //   expect(monad.doSomething()).toEqaul(7);
  // };

  it('should do something', function () {
    expect(monad.doSomething()).toEqual(7);
  });

});
