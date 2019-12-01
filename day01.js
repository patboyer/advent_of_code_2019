"use strict";

const R     = require("ramda");
const Utils = require("./utils.js");

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

const input = Utils.readFileToIntegers("input/day01.txt");
console.log(`Day 01 A: ${ solveA(input) }`);  //= 3295206
console.log(`Day 01 B: ${ solveB(input) }`);  //= 4939939
