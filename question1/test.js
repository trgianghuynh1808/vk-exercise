const isFirstSuperior = require("./question");

test("Test case 1: isFirstSuperior([1, 2, 3], [1, 2, 0]) ➞ true", () => {
  expect(isFirstSuperior([1, 2, 3], [1, 2, 0])).toEqual(true);
});

test('Test case 2: isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true', () => {
  expect(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])).toEqual(true);
});

test("Test case 3: isFirstSuperior([1, 2, 3], [1, 2, 3]) ➞ false", () => {
  expect(isFirstSuperior([1, 2, 3], [1, 2, 3])).toEqual(false);
});

test("Test case 4: isFirstSuperior([1, 2, 3], [1, 2, 4]) ➞ false", () => {
  expect(isFirstSuperior([1, 2, 3], [1, 2, 4])).toEqual(false);
});
