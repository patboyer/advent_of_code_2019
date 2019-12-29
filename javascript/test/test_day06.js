"use strict";

const Day06  = require("../lib/Day06");
const expect = require("chai").expect;

describe("Day 06 tests", () => {
  const input = "COM)B\nB)C\nC)D\nD)E\nE)F\n\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L";
  const map   = new Day06.OrbitMap(input);
  const map2  = new Day06.OrbitMap(input + "\nK)YOU\nI)SAN");

  it("should get number of orbits", () => {
    expect(map.numOrbits()).to.equal(42);
  });

  it("should find shortest path between 2 objects", () => {
    expect(map2.shortestPath("YOU", "SAN")).to.equal(4);
  });
});
