const countStick = require("./question");

test("Test case 1: countStick(1) = 6", () => {
  expect(countStick(1)).toBe(6);
});

test("Test case 2: countStick(2) = 11", () => {
  expect(countStick(2)).toBe(11);
});

test("Test case 3: countStick(3) = 16", () => {
  expect(countStick(3)).toBe(16);
});

test("Test case 4: countStick(87) = 436", () => {
  expect(countStick(87)).toBe(436);
});

test("Test case 5: countStick(0) = 0", () => {
  expect(countStick(0)).toBe(0);
});

test("Test case 6: countStick(-99) = 0", () => {
  expect(countStick(-99)).toBe(0);
});
