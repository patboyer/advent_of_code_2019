import math
import unittest

class Day01:
    def calculate_fuel_a(self, mass):
        return math.floor(mass / 3) - 2

    def calculate_fuel_b(self, mass):
        fuel = self.calculate_fuel_a(mass)
        if fuel > 0:
            return fuel + self.calculate_fuel_b(fuel)
        else:
            return 0

    def solve_a(self, modules):
        return sum([ self.calculate_fuel_a(m) for m in modules ])

    def solve_b(self, modules):
        return sum([ self.calculate_fuel_b(m) for m in modules ])


if __name__ == '__main__':
    with open("../input/day01.txt") as f:
        modules = [ int(s) for s in f.read().strip().split('\n') ]

    solver = Day01()
    print("Day 01 A: {}".format(solver.solve_a(modules)))
    print("Day 02 A: {}".format(solver.solve_b(modules)))
