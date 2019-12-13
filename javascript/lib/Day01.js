"use strict";

const R = require("ramda");

const calculateFuelA = (mass) => {
  return Math.floor(mass / 3) - 2;
};

// ES6 arrow functions don't handle recursion well
const calculateFuelB = function (mass) {
  const fuel = calculateFuelA(mass);

  return (fuel > 0)
    ? fuel + calculateFuelB(fuel)
    : 0;
};

const solveA = R.pipe(
  R.map(calculateFuelA),
  R.sum
);

const solveB = R.pipe(
  R.map(calculateFuelB),
  R.sum
);

module.exports = {
  calculateFuelA,
  calculateFuelB,
  solveA,
  solveB
};
