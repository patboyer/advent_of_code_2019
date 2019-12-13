"use strict";

const Day03  = require("../lib/Day03.js");
const expect = require("chai").expect;
const R      = require("ramda");

describe("Day 03 tests", () => {
  let wire1 = "R8,U5,L5,D3";
  let wire2 = "U7,R6,D4,L4";
  let wire3 = "U4,R4,D4,L4";
  let wire4 = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
  let wire5 = "U62,R66,U55,R34,D71,R55,D58,R83";
  let wire6 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51";
  let wire7 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7";

  let wirePoints1 = Day03.buildWire(wire1);
  let wirePoints2 = Day03.buildWire(wire2);
  let wirePoints3 = Day03.buildWire(wire3);
  let wirePoints4 = Day03.buildWire(wire4);
  let wirePoints5 = Day03.buildWire(wire5);
  let wirePoints6 = Day03.buildWire(wire6);
  let wirePoints7 = Day03.buildWire(wire7);

  it("should build a wire from string input", () => {
    expect(Object.keys(wirePoints1).length).to.equal(22);
    expect(Object.keys(wirePoints2).length).to.equal(22);
    expect(Object.keys(wirePoints3).length).to.equal(16);
    expect(wirePoints3["0:0"]).to.equal(2);
  });

  it("should find intersections between 2 wires", () => {
    let intersections = Day03.findIntersections([ wirePoints1, wirePoints2 ]);
    expect(intersections.length).to.equal(2);
  });

  it("should calculate the Manhattan distance between 0,0 and a point", () => {
    expect(Day03.manhattan("0:0")).to.equal(0);
    expect(Day03.manhattan("5:3")).to.equal(8);
    expect(Day03.manhattan("-2:4")).to.equal(6);
    expect(Day03.manhattan("-3:-7")).to.equal(10);
  });

  it("should count the steps to a point", () => {
    expect(Day03.countStepsToIntersection("2:0", wire1)).to.equal(2);
    expect(Day03.countStepsToIntersection("8:1", wire1)).to.equal(9);
    expect(Day03.countStepsToIntersection("3:5", wire1)).to.equal(18);
  });

  it("should find the Manhattan distance to the closest intersection", () => {
    expect(Day03.solveA([ wire1, wire2 ])).to.equal(6);
    expect(Day03.solveA([ wire4, wire5 ])).to.equal(159);
    expect(Day03.solveA([ wire6, wire7 ])).to.equal(135);
  });

  it("should find the intersection with the fewest total steps", () => {
    expect(Day03.solveB([ wire1, wire2 ])).to.equal(30);
    expect(Day03.solveB([ wire4, wire5 ])).to.equal(610);
    expect(Day03.solveB([ wire6, wire7 ])).to.equal(410);
  })
});
