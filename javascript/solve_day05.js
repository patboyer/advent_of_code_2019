"use strict";

const Solver = require("./lib/Day05.js");
const R      = require("ramda");
const Utils  = require("./lib/utils.js");

const input = R.pipe(
  (filename) => Utils.readFileToString(filename),
  R.split(","),
  R.map(Number)
)("day05.txt");

console.log(`Day 05 A: ${ Solver.solveA(input) }`);  //= 7286649
console.log(`Day 05 B: ${ Solver.solveB(input) }`);  //= 7286649 is too low
