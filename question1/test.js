const tuckInArray = require("./question");

test("Test case 1: tuckInArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
  expect(tuckInArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

test("Test case 2: tuckInArray([1, 2], [3, 4]) ➞ [1, 3, 4, 2]", () => {
  expect(tuckInArray([1, 2], [3, 4])).toEqual([1, 3, 4, 2]);
});

test("Test case 3: tuckInArray([1], [2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5]", () => {
  expect(tuckInArray([1], [2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("Test case 4: tuckInArray([1, 2, 3], [4]) ➞ [1, 2, 4, 3]", () => {
  expect(tuckInArray([1, 2, 3], [4])).toEqual([1, 2, 4, 3]);
});

test("Test case 5: tuckInArray([1, 2, 3, 4], [5, 6], [7, 8]) ➞ [1, 2, 5, 6, 7, 8, 3, 4]", () => {
  expect(tuckInArray([1, 2, 3, 4], [5, 6], [7, 8])).toEqual([
    1, 2, 5, 6, 7, 8, 3, 4,
  ]);
});

test("Test case 6: tuckInArray([1, 2, 3, 4], [5, 6], [], [9]) ➞ [1, 2, 5, 6, 9, 3, 4]", () => {
  expect(tuckInArray([1, 2, 3, 4], [5, 6], [], [9])).toEqual([
    1, 2, 5, 6, 9, 3, 4,
  ]);
});
