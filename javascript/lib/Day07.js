"use strict";

const IntCode = require("./Day05");
const R       = require("ramda");

// https://stackoverflow.com/questions/9960908/permutations-in-javascript
const permutator = (input) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(input);
 return result;
};

const configureAmplifiers = (instructions, phaseSettings) => {
  let a = IntCode.runProgram(instructions, [ phaseSettings[0], 0]).pop();
  let b = IntCode.runProgram(instructions, [ phaseSettings[1], a]).pop();
  let c = IntCode.runProgram(instructions, [ phaseSettings[2], b]).pop();
  let d = IntCode.runProgram(instructions, [ phaseSettings[3], c]).pop();
  return IntCode.runProgram(instructions, [ phaseSettings[4], d]).pop();
};

const solveA = (instructions) => R.pipe(
  R.curry(permutator),
  R.map((arr) => configureAmplifiers(instructions, arr)),
  R.reduce(R.max, 0)
)([ 0, 1, 2, 3, 4 ]);

const solveB = (instructions) => R.pipe(
  R.curry(permutator),
  R.map((arr) => configureAmplifiers(instructions, arr)),
  R.reduce(R.max, 0)
)([ 5, 6, 7, 8, 9 ]);

module.exports = {
  solveA,
  solveB
};
