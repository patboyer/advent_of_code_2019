"use strict";

const Solver = require("./lib/Day04.js");
const Utils  = require("./lib/utils.js");

const min = 246515;
const max = 739105;

console.log(`Day 04 A: ${ Solver.solveA(min, max) }`);  //= 1048
console.log(`Day 04 B: ${ Solver.solveB(min, max) }`);  //= 677
