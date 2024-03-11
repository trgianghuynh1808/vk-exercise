const sumN = require("./question");

test("Test case 1: sumN(4) => 10", () => {
  expect(sumN(4)).toBe(10);
});

test("Test case 2: sumN(13) => 91", () => {
  expect(sumN(13)).toBe(91);
});

test("Test case 3: sumN(600) => 180300", () => {
  expect(sumN(600)).toBe(180300);
});

test("Test case 4: sumN(1) => 1", () => {
  expect(sumN(1)).toBe(1);
});
