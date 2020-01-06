"use strict";

const R = require("ramda");

class Photo {
  constructor(sif, height, width) {
    this.layerSize = height * width;
    const regex    = new RegExp(`.{${ this.layerSize }}`, "g");
    this.height    = height;
    this.width     = width;
    this.layers    = sif.match(regex);
    console.log(this.layers);
    this.image     = this.render();
  }

  findLayerWithFewestZeroDigits() {
    return R.pipe(
      R.sortBy((layer) => this.numDigitsInLayer(layer, '0')),
      R.head
    )(this.layers);
  }

  numDigitsInLayer(layer, digit) {
    return R.pipe(
      R.split(""),
      R.filter(c => c === digit),
      R.length
    )(layer);
  }

  render() {
    const fn = R.zipWith((a, b) => (a === '2') ? b : a);
    const transparentLayer = Array(this.layerSize).fill('2');

    return R.pipe(
      R.map(R.split("")),
      R.reduce(fn, transparentLayer),
      R.join("")
    )(this.layers);
  }

  toString() {
    const regex = new RegExp(`.{${ this.width }}`, "g");
    return this.image.match(regex).join("\n").replace(/0/g, " ");
  }
}

const solveA = (p) => {
  const layer = p.findLayerWithFewestZeroDigits();
  return p.numDigitsInLayer(layer, '1') * p.numDigitsInLayer(layer, '2');
};

const solveB = (p) => p.toString();

module.exports = {
  Photo,
  solveA,
  solveB
};
