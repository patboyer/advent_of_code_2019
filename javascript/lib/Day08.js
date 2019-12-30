"use strict";

const R = require("ramda");

class Photo {
  constructor(sif, height, width) {
    this.layerSize = height * width;
    const regex    = new RegExp(`.{${ this.layerSize }}`, "g");
    this.height    = height;
    this.width     = width;
    this.layers    = sif.match(regex);
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
    let result = "";

    for (let i=0; i<this.layerSize; i++) {
      let c;

      for (let j=0; j<this.layers.length; j++) {
        c = this.layers[j][i];

        if (c === '2')
          continue;
        else
          break;
      }

      result += c;
    }

    return result;
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
