"use strict";

const Day02  = require("../lib/Day02");
const expect = require("chai").expect;

describe("Day 02 tests", () => {
  it("should run an Intcode program", () => {
    expect(Day02.runProgram([1,0,0,0,99])).to.equal(2);
    expect(Day02.runProgram([2,3,0,3,99])).to.equal(2);
    expect(Day02.runProgram([2,4,4,5,99,0])).to.equal(2);
    expect(Day02.runProgram([1,1,1,4,99,5,6,0,99])).to.equal(30);
    expect(Day02.runProgram([1,9,10,3,2,3,11,0,99,30,40,50])).to.equal(3500);
  });
});
