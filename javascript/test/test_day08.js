"use strict";

const Day08  = require("../lib/Day08");
const expect = require("chai").expect;

describe("Day 08 tests", () => {
  const photo  = new Day08.Photo('123456789012', 2, 3);
  const photo2 = new Day08.Photo('0222112222120000', 2, 2);

  it("should build an image from SIF format", () => {
    expect(photo.layers.length).to.equal(2);
    expect(photo2.layers.length).to.equal(4);
    expect(photo.layers[0]).to.equal('123456');
    expect(photo.layers[1]).to.equal('789012');
  });

  it("should find number of digits in a layer", () => {
    expect(photo.numDigitsInLayer(photo.layers[0], '0')).to.equal(0);
    expect(photo.numDigitsInLayer(photo.layers[0], '1')).to.equal(1);
    expect(photo.numDigitsInLayer(photo.layers[1], '0')).to.equal(1);
    expect(photo.numDigitsInLayer(photo.layers[1], '1')).to.equal(1);
    expect(photo2.numDigitsInLayer(photo2.layers[3], '0')).to.equal(4);
    expect(photo2.numDigitsInLayer(photo2.layers[3], '1')).to.equal(0);
  });

  it("should find the layer with the fewest zeroes", () => {
    expect(photo.findLayerWithFewestZeroDigits()).to.equal('123456');
  });

  it("should find number of '1's in layer with fewest zeroes", () => {
    expect(Day08.solveA(photo)).to.equal(1);
  });

  it ("should render the image", () => {
    expect(Day08.solveB(photo)).to.equal("183\n456");
    expect(Day08.solveB(photo2)).to.equal(" 1\n1 ");
  });
});
