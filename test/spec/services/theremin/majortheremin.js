'use strict';

describe('Service: majorTheremin', function () {

  // load the service's module
  beforeEach(module('thereminAngApp'));

  // instantiate service
  var majorTheremin;
  beforeEach(inject(function (_majorTheremin_) {
    majorTheremin = _majorTheremin_;
  }));

  it('should do something', function () {
    expect(!!majorTheremin).toBe(true);
  });

});
