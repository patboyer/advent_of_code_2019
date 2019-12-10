"use strict";

const expect = require("chai").expect;
const R      = require("ramda");
const Utils  = require("./utils.js");

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

expect(calculateFuelA(12)).to.be.equal(2);
expect(calculateFuelA(14)).to.be.equal(2);
expect(calculateFuelA(1969)).to.be.equal(654);
expect(calculateFuelA(100756)).to.be.equal(33583);
expect(solveA([ 12, 14, 1969, 100756])).to.be.equal(34241);

expect(calculateFuelB(12)).to.be.equal(2);
expect(calculateFuelB(14)).to.be.equal(2);
expect(calculateFuelB(1969)).to.be.equal(966);
expect(calculateFuelB(100756)).to.be.equal(50346);
expect(solveB([ 12, 14, 1969, 100756])).to.be.equal(51316);

const input = Utils.readFileToIntegers("input/day01.txt");
console.log(`Day 01 A: ${ solveA(input) }`);  //= 3295206
console.log(`Day 01 B: ${ solveB(input) }`);  //= 4939939
