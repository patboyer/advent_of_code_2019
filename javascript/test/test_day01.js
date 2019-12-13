"use strict";

const Day01  = require("../lib/Day01");
const expect = require("chai").expect;

describe("Day 01 tests", () => {
  it("should calculate fuel required for a module", () => {
    expect(Day01.calculateFuelA(12)).to.be.equal(2);
    expect(Day01.calculateFuelA(14)).to.be.equal(2);
    expect(Day01.calculateFuelA(1969)).to.be.equal(654);
    expect(Day01.calculateFuelA(100756)).to.be.equal(33583);
  });

  it("should calculate required for a module including weight of fuel", () => {
    expect(Day01.calculateFuelB(12)).to.be.equal(2);
    expect(Day01.calculateFuelB(14)).to.be.equal(2);
    expect(Day01.calculateFuelB(1969)).to.be.equal(966);
    expect(Day01.calculateFuelB(100756)).to.be.equal(50346);
  });

  it("should calculate fuel for a set of modules", () => {
    expect(Day01.solveA([ 12, 14, 1969, 100756])).to.be.equal(34241);
  });

  it("should calculate fuel for a set of modules plus weight of fuel", () => {
    expect(Day01.solveB([ 12, 14, 1969, 100756])).to.be.equal(51316);
  });
});
