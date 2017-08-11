'use strict';

function JugChallenge() {
  this._threeLitreJug = 0
  this._fiveLitreJug = 0
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
