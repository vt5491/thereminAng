'use strict';

describe('Service: pentatonicTheremin', function () {

  // load the service's module
  beforeEach(module('thereminAngApp'));

  // instantiate service
  var pentatonicTheremin;
  beforeEach(inject(function (_pentatonicTheremin_) {
    pentatonicTheremin = _pentatonicTheremin_;
  }));

  it('should do something', function () {
    expect(!!pentatonicTheremin).toBe(true);
  });

});
