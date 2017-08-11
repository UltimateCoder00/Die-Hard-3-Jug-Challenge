'use strict';
describe('JugChallenge', function() {

  var jugChallenge

  beforeEach(function() {
    jugChallenge = new JugChallenge();
  });

  describe('Weigh jugs', function() {
    it('Weigh 3 litre jug', function() {
      expect(jugChallenge.weighThreeLitreJug()).toEqual(0);
    });

    it('Weigh 5 litre jug', function() {
      expect(jugChallenge.weighFiveLitreJug()).toEqual(0);
    });
  });

  describe('Fill jugs', function() {
    it('Fill 3 litre jug with three litres', function() {
      jugChallenge.fillThreeLitreJug();
      expect(jugChallenge.weighThreeLitreJug()).toEqual(3);
    });

    it('Fill 5 litre jug with five litres', function() {
      jugChallenge.fillFiveLitreJug();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(5);
    });
  });

  describe('Empty jugs', function() {
    it('Empty 3 litre jug', function() {
      jugChallenge.fillThreeLitreJug();
      jugChallenge.emptyThreeLitreJug();
      expect(jugChallenge.weighThreeLitreJug()).toEqual(0);
    });

    it('Empty 5 litre jug', function() {
      jugChallenge.fillFiveLitreJug();
      jugChallenge.emptyFiveLitreJug();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(0);
    });
  });

  describe('Are the jugs full?', function() {
    it('Check if 3 litre jug is full', function() {
      expect(jugChallenge.isThreeLitreJugFull()).toBeFalsy();
      jugChallenge.fillThreeLitreJug();
      expect(jugChallenge.isThreeLitreJugFull()).toBeTruthy();
    });

    it('Check if 5 litre jug is full', function() {
      expect(jugChallenge.isFiveLitreJugFull()).toBeFalsy();
      jugChallenge.fillFiveLitreJug();
      expect(jugChallenge.isFiveLitreJugFull()).toBeTruthy();
    });
  });

  describe('Are the jugs empty?', function() {
    it('Check if 3 litre jug is empty', function() {
      expect(jugChallenge.isThreeLitreJugEmpty()).toBeTruthy();
      jugChallenge.fillThreeLitreJug();
      expect(jugChallenge.isThreeLitreJugEmpty()).toBeFalsy();
    });

    it('Check if 5 litre jug is empty', function() {
      expect(jugChallenge.isFiveLitreJugEmpty()).toBeTruthy();
      jugChallenge.fillFiveLitreJug();
      expect(jugChallenge.isFiveLitreJugEmpty()).toBeFalsy();
    });
  });

  describe('Pour from one jug to the other jug', function() {
    it('Pour from 3 litre jug to 5 litre jug', function() {
      jugChallenge.fillThreeLitreJug();
      jugChallenge.pourIntoFiveLitreJug();
      expect(jugChallenge.isThreeLitreJugEmpty()).toBeTruthy();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(3);
    });

    it('Pour from 5 litre jug to 3 litre jug', function() {
      jugChallenge.fillfiveLitreJug();
      jugChallenge.pourIntoThreeLitreJug();
      expect(jugChallenge.isThreeLitreJugFull()).toBeTruthy();
      expect(jugChallenge.weighFiveLitreJug()).toEqual(2);
    });
  });
});
