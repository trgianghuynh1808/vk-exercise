const largestSwapArr = require("./question");

test("Test case 1: largestWrapArr([3, 1, 5, 2], [9, 2, 6, 3, 8]) ➞ [[3, 1, 9, 2], [5, 2, 6, 3, 8]]", () => {
  expect(largestSwapArr([3, 1, 5, 2], [9, 2, 6, 3, 8])).toEqual([
    [3, 1, 9, 2],
    [5, 2, 6, 3, 8],
  ]);
});

test("Test case 2: largestWrapArr([3, 5, 5, 2], [9, 2, 6, 9, 8]) ➞ [[3, 9, 5, 2], [5, 2, 6, 9, 8]]", () => {
  expect(largestSwapArr([3, 5, 5, 2], [9, 2, 6, 9, 8])).toEqual([
    [3, 9, 5, 2],
    [5, 2, 6, 9, 8],
  ]);
});

test("Test case 3: largestWrapArr([], [1, 2, 3]) ➞ [[], [1, 2, 3]]", () => {
  expect(largestSwapArr([], [1, 2, 3])).toEqual([[], [1, 2, 3]]);
});

test("Test case 4: largestWrapArr([4, 5, 6], []) ➞ [[4, 5, 6], []]", () => {
  expect(largestSwapArr([4, 5, 6], [])).toEqual([[4, 5, 6], []]);
});
