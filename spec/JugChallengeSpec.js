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

  describe('Fill Jugs', function() {
    it('Fill 3 Litre Jug with three litres', function() {
      jugChallenge.fillThreeLitreJug();
      expect(jugChallenge.weighThreeLitreJug()).toEqual(3);
    });

    it('Fill 5 Litre Jug with five litres', function() {
      jugChallenge.fillFiveLitreJug();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(5);
    });
  });

  describe('Empty Jugs', function() {
    it('Empty 3 Litre Jug', function() {
      jugChallenge.fillThreeLitreJug();
      jugChallenge.emptyThreeLitreJug();
      expect(jugChallenge.weighThreeLitreJug()).toEqual(0);
    });

    it('Empty 5 Litre Jug', function() {
      jugChallenge.fillFiveLitreJug();
      jugChallenge.emptyFiveLitreJug();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(0);
    });
  });

  describe('Are the Jugs Full?', function() {
    it('Check if 3 Litre Jug is full', function() {
      expect(jugChallenge.isThreeLitreJugFull()).toBeFalsy();
      jugChallenge.fillThreeLitreJug();
      expect(jugChallenge.isThreeLitreJugFull()).toBeTruthy();
    });

    it('Check if 5 Litre Jug is full', function() {
      expect(jugChallenge.isFiveLitreJugFull()).toBeFalsy();
      jugChallenge.fillFiveLitreJug();
      expect(jugChallenge.isFiveLitreJugFull()).toBeTruthy();
    });
  });
});
