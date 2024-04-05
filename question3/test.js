const possibleBonus = require("./question");

test("Test case 1: possibleBonus(1, 5) ➞ true", () => {
  expect(possibleBonus(1, 5)).toBe(true);
});

test("Test case 2: possibleBonus(6, 12) ➞ true", () => {
  expect(possibleBonus(6, 12)).toBe(true);
});

test("Test case 3: possibleBonus(2, 9) ➞ false", () => {
  expect(possibleBonus(2, 9)).toBe(false);
});

test("Test case 4: possibleBonus(1, 8) ➞ false", () => {
  expect(possibleBonus(1, 8)).toBe(false);
});
