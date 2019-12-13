"use strict";

const R = require("ramda");

const buildWire = (directions) => {
  let wire = { "0:0": 1 };

  traveseWire(directions, (p) => {
    wire[`${ p }`] = (wire[`${ p }`] || 0) + 1;
    return true;
  });

  return wire;
}

const countStepsToIntersection = (target, directions) => {
  let steps = 0;

  traveseWire(directions, (p) => {
    steps++;
    return (p !== target);
  });

  return steps;
};

const findIntersections = (wires) => R.filter(
  (p) => ( (R.prop(p, wires[1])) && (p !== "0:0") ),
  Object.keys(wires[0])
);

const manhattan = (p) => {
  let [ px, py ] = R.split(":", p);
  return Math.abs(px) + Math.abs(py);
}

const solveA = R.pipe(
  R.map(buildWire),
  R.curry(findIntersections),
  R.map(manhattan),
  R.sort((a, b) => (a - b)),
  R.head
);

const solveB = (wires) => {
  const totalStepsToTarget = (wires, target) => R.pipe(
    R.map(countStepsToIntersection(target)),
    R.sum
  )(wires);

  const intersections = R.pipe(
    R.map(buildWire),
    R.curry(findIntersections),
  )(wires);

  return R.pipe(
    R.map((target) => countStepsToIntersection(target, wires[0]) + countStepsToIntersection(target, wires[1])),
    R.sort((a, b) => (a - b)),
    R.head
  )(intersections);
};

const traveseWire = (directions, fn) => {
  let input = R.split(",", directions);
  let x     = 0;
  let y     = 0;

  for (let i=0; i<input.length; i++) {
    let section    = input[i];
    let direction  = section[0];
    let wireLength = parseInt(section.slice(1));

    for (let j=0; j<wireLength; j++) {
      switch (direction) {
        case 'R': x++; break;
        case 'L': x--; break;
        case 'U': y++; break;
        case 'D': y--; break;
        default: {
          console.log(`ERROR: unknown direction ${ direction } found in wire section ${ section }.`);
          process.exit(1);
        }
      }

      if (! fn(`${ x }:${ y }`)) {
        return;
      }
    }
  }

};

module.exports = {
  buildWire,
  countStepsToIntersection,
  findIntersections,
  manhattan,
  solveA,
  solveB
};
