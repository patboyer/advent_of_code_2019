"use strict";

const Solver = require("./lib/Day02.js");
const R      = require("ramda");
const Utils  = require("./lib/utils.js");

const input = R.pipe(
  (filename) => Utils.readFileToString(filename),
  R.split(","),
  R.map((s) => parseInt(s))
)("day02.txt");

console.log(`Day 02 A: ${ Solver.solveA(input) }`);            //= 3716250
console.log(`Day 02 B: ${ Solver.solveB(input, 19690720) }`);  //= 6472
