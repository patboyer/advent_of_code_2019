"use strict";

const Solver = require("./lib/Day03.js");
const R      = require("ramda");
const Utils  = require("./lib/utils.js");

const wires = Utils.readFileToLines("day03.txt");

console.log(`Day 03 A: ${ Solver.solveA(wires) }`);  //= 709
console.log(`Day 03 B: ${ Solver.solveB(wires) }`);  //= 13836
