const findMinMax = require("./question");

test("Test case 1: findMinMax([4, 3, 2, 5, 1]) => [1, 5]", () => {
  const [min, max] = findMinMax([4, 3, 2, 5, 1]);

  expect(min).toBe(1);
  expect(max).toBe(5);
});

test("Test case 2: findMinMax([1]) => [1, 1]", () => {
  const [min, max] = findMinMax([1]);

  expect(min).toBe(1);
  expect(max).toBe(1);
});

test("Test case 3: findMinMax([1, 2, 8, 4, '', 6, 'a', 8, 'c']) => [1, 8]", () => {
  const [min, max] = findMinMax([1, 2, 8, 4, "", 6, "a", 8, "c"]);

  expect(min).toBe(1);
  expect(max).toBe(8);
});
