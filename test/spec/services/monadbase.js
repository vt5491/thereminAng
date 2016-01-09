'use strict';

describe('Service: monadBase', function () {

  // load the service's module
  beforeEach(module('thereminAngApp'));

  // instantiate service
  var monadBase;
  beforeEach(inject(function (_monadBase_) {
    monadBase = _monadBase_;
  }));

  it('should do something', function () {
    expect(!!monadBase).toBe(true);
  });

});
