"use strict";

const Solver = require("./lib/Day01.js");
const R      = require("ramda");
const Utils  = require("./lib/utils.js");

const input = R.map(parseInt, Utils.readFileToLines("day01.txt"));

console.log(`Day 01 A: ${ Solver.solveA(input) }`);  //= 3295206
console.log(`Day 01 B: ${ Solver.solveB(input) }`);  //= 4939939
