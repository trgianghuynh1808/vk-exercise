const canNest = require("./question");

test("Test case 1: canNest([1, 2, 3, 4], [0, 6]) ➞ true", () => {
  expect(canNest([1, 2, 3, 4], [0, 6])).toBe(true);
});

test("Test case 2: canNest([3, 1], [4, 0]) ➞ true", () => {
  expect(canNest([3, 1], [4, 0])).toBe(true);
});

test("Test case 3: canNest([9, 9, 8], [8, 9]) ➞ true", () => {
  expect(canNest([9, 9, 8], [8, 9])).toBe(true);
});

test("Test case 4: canNest([], [8, 9]) ➞ true", () => {
  expect(canNest([], [8, 9])).toBe(true);
});

test("Test case 5: canNest([8, 9], []) ➞ false", () => {
  expect(canNest([8, 9], [])).toBe(false);
});

test("Test case 6: canNest([], []) ➞ false", () => {
  expect(canNest([], [])).toBe(false);
});
