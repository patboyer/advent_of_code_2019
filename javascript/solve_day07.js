"use strict";

const Day07 = require("./lib/Day07.js");
const R     = require("ramda");
const Utils = require("./lib/utils.js");

const input = R.pipe(
  (filename) => Utils.readFileToString(filename),
  R.split(","),
  R.map(Number)
)("day07.txt");

console.log(`Day 07 A: ${ Day07.solveA(input) }`);  //= 75228
console.log(`Day 07 B: ${ Day07.solveB(input) }`);  //= 
