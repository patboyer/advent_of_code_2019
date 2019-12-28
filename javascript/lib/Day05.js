"use strict";

const R = require("ramda");

String.prototype.lpad = function (newlen, c=' ') {
  if (newlen < this.length)
    return this;
  else {
    let arr = this.split("");
    return Array(newlen - this.length).fill(c).concat(this).join("");
  }
};

const parseCmd = (instruction) => {
  let s = instruction.toString().lpad(5, '0');
  let opcode = Number(s.slice(-2, s.length));
  let modes  = s.slice(0, -2).split("").map(Number).reverse();
  return { mode1: modes[0], mode2: modes[1], opcode: opcode };
};

const runProgram = (instructions, input) => {
  let output = [];
  let instr  = [ ...instructions ];
  let idx    = 0;
  let param1, param2, target;

  const handleParam = (mode, param) => (mode === 0)
    ? instr[param]
    : param;

  while (true) {
    let { mode1, mode2, opcode } = parseCmd(instr[idx]);
    [ param1, param2, target ] = instr.slice(idx+1, idx+4);
    //console.log(instr[idx] + " " + opcode + " " + modes.join(""));

    switch (opcode) {
      case 1:
        instr[target] = handleParam(mode1, param1) + handleParam(mode2, param2)
        idx += 4;
        break;
      case 2:
        instr[target] = handleParam(mode1, param1) * handleParam(mode2, param2)
        idx += 4;
        break;
      case 3:
        instr[param1] = input;
        idx += 2;
        break;
      case 4:
        output.push(instr[param1]);
        idx += 2;
        break;
      case 5:
        idx = (handleParam(mode1, param1) !== 0)
          ? handleParam(mode2, param2)
          : idx + 3;

        break;
      case 6:
        idx = (handleParam(mode1, param1) === 0)
          ? handleParam(mode2, param2)
          : idx + 3;

        break;
      case 7:
        instr[target] = (handleParam(mode1, param1) < handleParam(mode2, param2))
          ? 1
          : 0;

        idx += 4;
        break;
      case 8:
        instr[target] = (handleParam(mode1, param1) === handleParam(mode2, param2))
          ? 1
          : 0;

        idx += 4;
        break;
      case 99:
        return output;
        break;
      default:
        output.push(-1);
        return output;
    }
  }
};

const solveA = (instructions) => runProgram(instructions, 1).pop();  //= 7286649

const solveB = (instructions) => runProgram(instructions, 5).pop();  //= 15724522

module.exports = {
  runProgram,
  parseCmd,
  solveA,
  solveB
};
