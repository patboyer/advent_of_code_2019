"use strict";

const Day04  = require("../lib/Day04");
const expect = require("chai").expect;

describe("Day 04 tests", () => {
  it("should identify valid passwords", () => {
    expect(Day04.isValidPasswordA(111111)).to.be.true;
    expect(Day04.isValidPasswordA(111123)).to.be.true;
    expect(Day04.isValidPasswordA(122345)).to.be.true;
    expect(Day04.isValidPasswordA(123789)).to.be.false;
    expect(Day04.isValidPasswordA(223450)).to.be.false;
    expect(Day04.isValidPasswordA(299999)).to.be.true;
  });

  it("should identify valid passwords (with additional requirements)", () => {
    expect(Day04.isValidPasswordB(111111)).to.be.false;
    expect(Day04.isValidPasswordB(111122)).to.be.true;
    expect(Day04.isValidPasswordB(111123)).to.be.false;
    expect(Day04.isValidPasswordB(112233)).to.be.true;
    expect(Day04.isValidPasswordB(122345)).to.be.true;
    expect(Day04.isValidPasswordB(123444)).to.be.false;
    expect(Day04.isValidPasswordB(123789)).to.be.false;
    expect(Day04.isValidPasswordB(223450)).to.be.false;
    expect(Day04.isValidPasswordB(299999)).to.be.false;
    expect(Day04.isValidPasswordB(123456)).to.be.false;
    expect(Day04.isValidPasswordB(112345)).to.be.true;
    expect(Day04.isValidPasswordB(111234)).to.be.false;
    expect(Day04.isValidPasswordB(111123)).to.be.false;
    expect(Day04.isValidPasswordB(111112)).to.be.false;
  });

  it("should generate the next password option", () => {
    expect(Day04.getNext(111111, Day04.isValidPasswordA)).to.equal(111112);
    expect(Day04.getNext(111119, Day04.isValidPasswordA)).to.equal(111122);
    expect(Day04.getNext(122399, Day04.isValidPasswordA)).to.equal(122444);
    expect(Day04.getNext(299999, Day04.isValidPasswordA)).to.equal(333333);
    expect(Day04.getNext(999999, Day04.isValidPasswordA)).to.equal(Day04.UPPER_LIMIT);

    expect(Day04.getNext(111111, Day04.isValidPasswordB)).to.equal(111122);
    expect(Day04.getNext(111119, Day04.isValidPasswordB)).to.equal(111122);
    expect(Day04.getNext(122399, Day04.isValidPasswordB)).to.equal(122444);
    expect(Day04.getNext(299999, Day04.isValidPasswordB)).to.equal(333344);
    expect(Day04.getNext(999999, Day04.isValidPasswordB)).to.equal(Day04.UPPER_LIMIT);
  });
});
