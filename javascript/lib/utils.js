"use strict";

const fs = require("fs");
const R  = require("ramda");

const INPUT_DIR = "../input";

String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, '');
};

const readFile = (filename) => fs.readFileSync(`${ INPUT_DIR }/${ filename }`);

const readFileToString = (filename) => readFile(filename).toString();

const readFileToLines = R.pipe(
  R.curry(readFileToString),
  R.split("\n"),
  R.map((s) => s.trim()),
  R.reject((s) => (s.length === 0))
);

module.exports = {
  readFile,
  readFileToLines,
  readFileToString
};
