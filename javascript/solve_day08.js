"use strict";

const Day08 = require("./lib/Day08.js");
const R     = require("ramda");
const Utils = require("./lib/utils.js");

const input  = Utils.readFileToString("day08.txt");
const photo  = new Day08.Photo(input, 6, 25);

console.log(`Day 08 A: ${ Day08.solveA(photo) }`);      //= 1596
console.log(`Day 08 B: \n${ Day08.solveB(photo) }\n`);  //= LBRCE
