"use strict";

const R = require("ramda");

const PASSWORD_LENGTH = 6;
const UPPER_LIMIT     = Math.pow(10, PASSWORD_LENGTH);
let duplicate = /(.)\1/;

const getNext = (n, fn) => {
  n++;

  while ( (! fn(n)) && (n < UPPER_LIMIT) ) {
    n++;
  }

  return n;
};

const isValidPasswordA = (n) => {
  const s = n.toString();

  return (
    (s.split("").sort().join("") === s)
    && duplicate.test(s)
  );
};

const isValidPasswordB = (n) => {
  const letterCounts = R.pipe(
    (i) => i.toString(),
    R.split(""),
    R.countBy(R.identity),
    R.values
  )(n);

  return (isValidPasswordA(n) && R.includes(2, letterCounts));
};

const solve = (min, max, fn) => {
  let numPasswords = 0;
  let n = getNext(min, fn);

  while (n <= max) {
    numPasswords++;
    n = getNext(n, fn);
  }

  return numPasswords;
};

const solveA = (min, max) => solve(min, max, isValidPasswordA);
const solveB = (min, max) => solve(min, max, isValidPasswordB);

module.exports = {
  getNext,
  isValidPasswordA,
  isValidPasswordB,
  solveA,
  solveB,
  UPPER_LIMIT
};
