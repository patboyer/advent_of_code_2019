"use strict";

const Day12 = require("./lib/Day12.js");
const R     = require("ramda");
const Utils = require("./lib/utils.js");

const input  = Utils.readFileToLines("day12.txt");

console.log(`Day 12 A: ${ Day12.solveA(input) }`);  //= 10635
console.log(`Day 12 B: ${ Day12.solveB(input) }`);  //=
