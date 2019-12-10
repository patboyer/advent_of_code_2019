"use strict";

const fs = require("fs");
const R  = require("ramda");

const INPUT_DIR = `${ __dirname }/../input`;

const readFile = R.pipe(
  (filename) => fs.readFileSync(`${ INPUT_DIR }/${ filename }`),
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
  readFileToIntegers,
  INPUT_DIR
};

