'use strict';

function JugChallenge() {
  this.MAX_THREE_LITRE_CAPACITY = 3;
  this.MAX_FIVE_LITRE_CAPACITY = 5;
  this._threeLitreJug = 0;
  this._fiveLitreJug = 0;
}

JugChallenge.prototype.weighThreeLitreJug = function() {
  return this._threeLitreJug;
};

JugChallenge.prototype.weighFiveLitreJug = function() {
  return this._fiveLitreJug;
};

JugChallenge.prototype.fillThreeLitreJug = function() {
  this._threeLitreJug = 3;
};

JugChallenge.prototype.fillFiveLitreJug = function() {
  this._fiveLitreJug = 5;
};

JugChallenge.prototype.emptyThreeLitreJug = function() {
  this._threeLitreJug = 0;
};

JugChallenge.prototype.emptyFiveLitreJug = function() {
  this._fiveLitreJug = 0;
};

JugChallenge.prototype.isThreeLitreJugFull = function() {
  return this._threeLitreJug == 3;
};

JugChallenge.prototype.isFiveLitreJugFull = function() {
  return this._fiveLitreJug == 5;
};

JugChallenge.prototype.isThreeLitreJugEmpty = function() {
  return this._threeLitreJug == 0;
};

JugChallenge.prototype.isFiveLitreJugEmpty = function() {
  return this._fiveLitreJug == 0;
};

JugChallenge.prototype.pourIntoFiveLitreJug = function() {
  this._fiveLitreJug += this._threeLitreJug;
  this.emptyThreeLitreJug();
};

JugChallenge.prototype.pourIntoThreeLitreJug = function() {
  this.fillThreeLitreJug();
  this._fiveLitreJug -= this._threeLitreJug;
};
