"use strict";

const R = require("ramda");

class Moon {
  constructor(position) {
    let [ x, y, z ] = position.match(/(-?[0-9]+)/g).map(Number);
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = this.vy = this.vz = 0;
  }

  applyGravity(other) {
    if (this.x < other.x)      this.vx++;
    else if (this.x > other.x) this.vx--;

    if (this.y < other.y)      this.vy++;
    else if (this.y > other.y) this.vy--;

    if (this.z < other.z)      this.vz++;
    else if (this.z > other.z) this.vz--;
  }

  kineticEnergy() {
    return Math.abs(this.vx) + Math.abs(this.vy) + Math.abs(this.vz);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }

  potentialEnergy() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }

  toString() {
    return `pos=<x=${this.x}, y=${this.y}, z=${this.z}>, vel=<x=${this.vx}, y=${this.vx}, z=${this.vx}>`;
  }

  totalEnergy() {
    return this.kineticEnergy() * this.potentialEnergy();
  }
}


const solveA = (input) => {
  let moons = R.map((s) => new Moon(s), input);
  let comparisons = R.xprod(moons, moons);

  for (let t=1; t<=1000; t++) {
    comparisons.map((arr) => {
      let [ m1, m2 ] = arr;
      m1.applyGravity(m2);
    });

    moons.map((m) => m.move());
    console.log(moons[0].totalEnergy());
  }

  return R.pipe(
    R.map((m) => m.totalEnergy()),
    R.sum
  )(moons);
};

const solveB = (input) => {};

module.exports = {
  Moon,
  solveA,
  solveB
};
