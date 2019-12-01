"use strict";

const fs = require("fs");
const R  = require("ramda");

const readFile = R.pipe(
  (filename) => fs.readFileSync(filename),
  (obj)      => obj.toString(),
  (s)        => s.slice(0, -1),
  R.split("\n")
);

const readFileToIntegers = R.pipe(
  (filename) => readFile(filename),
  R.map((s)  => parseInt(s))
);

module.exports = {
  readFile,
  readFileToIntegers
};
