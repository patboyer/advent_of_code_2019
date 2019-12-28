"use strict";

const Day05  = require("../lib/Day05");
const expect = require("chai").expect;

describe("Day 05 tests", () => {
  it("should parse IntCode instructions", () => {
    expect(Day05.parseCmd('1002').opcode).to.equal(2);
    expect(Day05.parseCmd('1002').mode1).to.equal(0);
    expect(Day05.parseCmd('1002').mode2).to.equal(1);
    expect(Day05.parseCmd('1101').opcode).to.equal(1);
    expect(Day05.parseCmd('1101').mode1).to.equal(1);
    expect(Day05.parseCmd('1101').mode2).to.equal(1);
    expect(Day05.parseCmd('3').opcode).to.equal(3);
    expect(Day05.parseCmd('3').mode1).to.equal(0);
    expect(Day05.parseCmd('3').mode2).to.equal(0);
  });

  it("should run an Intcode program", () => {
    expect(Day05.runProgram([3,0,4,0,99], 1).pop()).to.equal(1);
    expect(Day05.runProgram([3,9,8,9,10,9,4,9,99,-1,8], 7).pop()).to.equal(0);
    expect(Day05.runProgram([3,9,8,9,10,9,4,9,99,-1,8], 8).pop()).to.equal(1);
    expect(Day05.runProgram([3,9,8,9,10,9,4,9,99,-1,8], 9).pop()).to.equal(0);
    expect(Day05.runProgram([3,9,7,9,10,9,4,9,99,-1,8], 7).pop()).to.equal(1);
    expect(Day05.runProgram([3,9,7,9,10,9,4,9,99,-1,8], 8).pop()).to.equal(0);
    expect(Day05.runProgram([3,9,7,9,10,9,4,9,99,-1,8], 9).pop()).to.equal(0);
    expect(Day05.runProgram([3,3,1108,-1,8,3,4,3,99], 7).pop()).to.equal(0);
    expect(Day05.runProgram([3,3,1108,-1,8,3,4,3,99], 8).pop()).to.equal(1);
    expect(Day05.runProgram([3,3,1108,-1,8,3,4,3,99], 9).pop()).to.equal(0);
    expect(Day05.runProgram([3,3,1107,-1,8,3,4,3,99], 7).pop()).to.equal(1);
    expect(Day05.runProgram([3,3,1107,-1,8,3,4,3,99], 8).pop()).to.equal(0);
    expect(Day05.runProgram([3,3,1107,-1,8,3,4,3,99], 9).pop()).to.equal(0);
    expect(Day05.runProgram([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], -1).pop()).to.equal(1);
    expect(Day05.runProgram([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], 0).pop()).to.equal(0);
    expect(Day05.runProgram([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], 5).pop()).to.equal(1);
    expect(Day05.runProgram([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], -1).pop()).to.equal(1);
    expect(Day05.runProgram([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], 0).pop()).to.equal(0);
    expect(Day05.runProgram([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], 5).pop()).to.equal(1);
    expect(Day05.runProgram([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 8).pop()).to.equal(1000);
    expect(Day05.runProgram([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 9).pop()).to.equal(1001);
  });
});
