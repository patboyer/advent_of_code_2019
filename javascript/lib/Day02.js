"use strict";

const R = require("ramda");

const runProgram = (input, noun=null, verb=null) => {
  let instr = [ ...input ];
  let idx   = 0;
  instr[1]  = (noun) ? noun : instr[1];
  instr[2]  = (verb) ? verb : instr[2];

  while (true) {
    let opcode = instr[idx];

    if (opcode === 99) {
      return instr[0];
    }
    else if ( (opcode === 1) || (opcode === 2) ) {
      let [ operand1, operand2, target ] = instr.slice(idx+1, idx+4);
      idx += 4;
      instr[target] = (opcode === 1)
        ? instr[operand1] + instr[operand2]
        : instr[operand1] * instr[operand2];
    }
    else {
      return -1;
    }
  }
};

const solveA = (input) => {
  const noun = 12;
  const verb = 2;
  return runProgram(input, noun, verb);
}

const solveB = (input, target) => {
  for (let noun=0; noun<=99; noun++) {
    for (let verb=0; verb<=99; verb++) {
      let result = runProgram(input, noun, verb);

      if (result === target) {
        return 100 * noun + verb;
      }
    }
  }
};

module.exports = {
  runProgram,
  solveA,
  solveB
};
