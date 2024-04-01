const countPotatoes = require("./question");

test("Test case 1: countPotatoes('potatopotato') ➞ 2", () => {
  expect(countPotatoes("potatopotato")).toBe(2);
});

test("Test case 2: countPotatoes('potatoapple') ➞ 1", () => {
  expect(countPotatoes("potatoapple")).toBe(1);
});

test("Test case 3: countPotatoes('potatopotatopotato') ➞ 3", () => {
  expect(countPotatoes("potatopotatopotato")).toBe(3);
});

test("Test case 4: countPotatoes('apple') ➞ 0", () => {
  expect(countPotatoes("apple")).toBe(0);
});
