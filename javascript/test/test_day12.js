"use strict";

const Day12  = require("../lib/Day12");
const expect = require("chai").expect;

describe("Day 12 tests", () => {
  let moon1, moon2, moon3, moon4;

  beforeEach(() => {
    moon1 = new Day12.Moon("<x=-1, y=0, z=2>");
    moon2 = new Day12.Moon("<x=2, y=-10, z=-7>");
    moon3 = new Day12.Moon("<x=4, y=-8, z=8>");
    moon4 = new Day12.Moon("<x=3, y=5, z=-1>");
  });

  it("should build a moon object", () => {
    expect(moon1.x).to.equal(-1);
    expect(moon1.y).to.equal(0);
    expect(moon1.z).to.equal(2);
    expect(moon1.vx).to.equal(0);
    expect(moon1.vy).to.equal(0);
    expect(moon1.vz).to.equal(0);
  });

  it("should apply gravity between 2 moons", () => {
    moon1.applyGravity(moon2);
    expect(moon1.x).to.equal(-1);
    expect(moon1.y).to.equal(0);
    expect(moon1.z).to.equal(2);
    expect(moon1.vx).to.equal(1);
    expect(moon1.vy).to.equal(-1);
    expect(moon1.vz).to.equal(-1);

    moon2.applyGravity(moon1);
    expect(moon2.x).to.equal(2);
    expect(moon2.y).to.equal(-10);
    expect(moon2.z).to.equal(-7);
    expect(moon2.vx).to.equal(-1);
    expect(moon2.vy).to.equal(1);
    expect(moon2.vz).to.equal(1);
  });

  it("should move a moon", () => {
    moon1.applyGravity(moon2);
    moon1.move();
    expect(moon1.x).to.equal(0);
    expect(moon1.y).to.equal(-1);
    expect(moon1.z).to.equal(1);
    expect(moon1.vx).to.equal(1);
    expect(moon1.vy).to.equal(-1);
    expect(moon1.vz).to.equal(-1);

    moon2.applyGravity(moon1);
    moon2.move();
    expect(moon2.x).to.equal(1);
    expect(moon2.y).to.equal(-9);
    expect(moon2.z).to.equal(-6);
    expect(moon2.vx).to.equal(-1);
    expect(moon2.vy).to.equal(1);
    expect(moon2.vz).to.equal(1);
  });

  it("should calculate energy of a moon", () => {
    moon1.applyGravity(moon2);
    moon1.move();
    expect(moon1.kineticEnergy()).to.equal(3);
    expect(moon1.potentialEnergy()).to.equal(2);
    expect(moon1.totalEnergy()).to.equal(6);

    moon2.applyGravity(moon1);
    moon2.move();
    expect(moon2.kineticEnergy()).to.equal(3);
    expect(moon2.potentialEnergy()).to.equal(16);
    expect(moon2.totalEnergy()).to.equal(48);
  });
});
