"use strict";

const R = require("ramda");

class SpaceObject {
  constructor(name) {
    this.name      = name;
    this.neighbors = [];
  }

  addNeighbor(other) {
    this.neighbors = R.pipe(
      R.append(other),
      R.uniqBy((o) => o.name)
    )(this.neighbors);
  }

  hasNeighbor(other) {
    return R.pipe(
      R.map(R.prop("name")),
      R.filter((name) => (name === other.name)),
      R.count,
      (n) => (n > 0)
    )(this.neighbors);
  }
}

class OrbitMap {
  constructor(input) {
    this.objects = {};
    this.visited = [];

    input.split("\n").filter((s) => s.length > 0).map((s) => {
      let [ n1, n2 ] = R.split(")", s);
      let o1 = this.objects[n1] || new SpaceObject(n1);
      let o2 = this.objects[n2] || new SpaceObject(n2);
      o1.addNeighbor(o2);
      o2.addNeighbor(o1);
      this.objects[n1] = o1;
      this.objects[n2] = o2;
    });

    this.root = this.find("COM");
  }

  find(target) {
    return R.prop(target, this.objects);
  }

  numOrbits() {
    this.visited = [];
    return this._numOrbits(this.root, 0);
  }

  _numOrbits(o, n) {
    if (this.visited.includes(o.name)) {
      return 0;
    }
    else {
      this.visited.push(o.name);

      return R.pipe(
        R.map((child) => this._numOrbits(child, n+1)),
        R.concat([ n ]),
        R.sum,
      )(o.neighbors);
    }
  }

  shortestPath(src, target) {
    this.visited = [];
    return this._shortestPath(this.find(src), target) - 3;
  }

  _shortestPath(o, target) {
    if (this.visited.includes(o.name))
      return 0;
    else if (o.name === target) {
      this.visited.push(o.name);
      return 1;
    }
    else {
      this.visited.push(o.name);

      let result = R.pipe(
        R.map((child) => this._shortestPath(child, target)),
        R.filter((n => n > 0)),
        R.head
      )(o.neighbors);

      return (result) ? 1 + result : 0;
    }
  }
}

module.exports = { OrbitMap };
