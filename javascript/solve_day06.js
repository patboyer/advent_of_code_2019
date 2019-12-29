"use strict";

const Day06 = require("./lib/Day06.js");
const R     = require("ramda");
const Utils = require("./lib/utils.js");

const input  = Utils.readFileToString("day06.txt");
const map    = new Day06.OrbitMap(input);

console.log(`Day 06 A: ${ map.numOrbits() }`);  //= 122782
console.log(`Day 06 B: ${ map.shortestPath("YOU", "SAN") }`);  //= 271
