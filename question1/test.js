const sumArr = require("./question");

test("Test case 1:  sumArr([1, 2, 3]) = 6", () => {
  expect(sumArr([1, 2, 3])).toBe(6);
});

test("Test case 2: sumArr([1, 2, 3, 4, 5]) = 15", () => {
  expect(sumArr([1, 2, 3, 4, 5])).toBe(15);
});

test("Test case 3: sumArr([]) = 0", () => {
  expect(sumArr([])).toBe(0);
});

test("Test case 3: sumArr(undefined) = 0", () => {
  expect(sumArr(undefined)).toBe(0);
});
