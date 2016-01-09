'use strict';

describe('Service: monadUtils', function () {

  // load the service's module
  beforeEach(module('thereminAngApp'));

  // instantiate service
  var monadUtils;
  beforeEach(inject(function (_monadUtils_) {
    monadUtils = _monadUtils_;
  }));

  it('should do something', function () {
    expect(!!monadUtils).toBe(true);
  });

});
