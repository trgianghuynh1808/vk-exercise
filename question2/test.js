const convertHoursToMinutes = require("./question");

test("Test case 1: convertHoursToMinutes(2, 20) => 140", () => {
  expect(convertHoursToMinutes(2, 20)).toBe(140);
});

test("Test case 2: convertHoursToMinutes(5, 50) => 350", () => {
  expect(convertHoursToMinutes(5, 50)).toBe(350);
});

test("Test case 3: convertHoursToMinutes(0, 50) => 50", () => {
  expect(convertHoursToMinutes(0, 50)).toBe(50);
});

test("Test case 4: convertHoursToMinutes(undefined, 50) => 50", () => {
  expect(convertHoursToMinutes(undefined, 50)).toBe(50);
});

test("Test case 5: convertHoursToMinutes(7) => 420", () => {
  expect(convertHoursToMinutes(7)).toBe(420);
});
