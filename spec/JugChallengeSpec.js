'use strict';
describe('JugChallenge', function() {

  var jugChallenge

  beforeEach(function() {
    jugChallenge = new JugChallenge();
  });

  describe('Weigh Jugs', function() {
    it('Weigh 3 Litre Jug', function() {
      expect(jugChallenge.weighThreeLitreJug()).toEqual(0);
    });

    it('Weigh 5 Litre Jug', function() {
      expect(jugChallenge.weighFiveLitreJug()).toEqual(0);
    });
  });
});
