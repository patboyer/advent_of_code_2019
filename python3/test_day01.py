import unittest
from Day01 import Day01

class TestDay01(unittest.TestCase):
    def setUp(self):
        self.test_modules = [12, 14, 1969, 100756]
        self.solver = Day01()

    def test_calculate_a(self):
        self.assertEqual(self.solver.calculate_fuel_a(12), 2)
        self.assertEqual(self.solver.calculate_fuel_a(14), 2)
        self.assertEqual(self.solver.calculate_fuel_a(1969), 654)
        self.assertEqual(self.solver.calculate_fuel_a(100756), 33583)

    def test_calculate_b(self):
        self.assertEqual(self.solver.calculate_fuel_b(12), 2)
        self.assertEqual(self.solver.calculate_fuel_b(14), 2)
        self.assertEqual(self.solver.calculate_fuel_b(1969), 966)
        self.assertEqual(self.solver.calculate_fuel_b(100756), 50346)

    def test_solve_a(self):
        self.assertEqual(self.solver.solve_a(self.test_modules), 34241)

    def test_solve_b(self):
        self.assertEqual(self.solver.solve_b(self.test_modules), 51316)


if __name__ == '__main__':
    unittest.main()
