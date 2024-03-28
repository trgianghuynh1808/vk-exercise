const largestSwap = require("./question");

test("Test case 1: largestSwap(14) ➞ false", () => {
  expect(largestSwap(14)).toBe(false);
});

test("Test case 2: largestSwap(53) ➞ true", () => {
  expect(largestSwap(53)).toBe(true);
});

test("Test case 3: largestSwap(34) ➞ false", () => {
  expect(largestSwap(34)).toBe(false);
});

test("Test case 4: largestSwap(99) ➞ true", () => {
  expect(largestSwap(99)).toBe(true);
});
