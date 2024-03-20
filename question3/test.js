const timeForNoelLove = require("./question");

test("Test case 1: timeForNoelLove(new Date(2013, 11, 24)) => true", () => {
  expect(timeForNoelLove(new Date(2013, 11, 24))).toBe(true);
});

test("Test case 2: timeForNoelLove(new Date(3000, 11, 24)) => true", () => {
  expect(timeForNoelLove(new Date(3000, 11, 24))).toBe(true);
});

test("Test case 3: timeForNoelLove(new Date(3000, 0, 24)) => false", () => {
  expect(timeForNoelLove(new Date(3000, 0, 24))).toBe(false);
});

test("Test case 4: timeForNoelLove(new Date(3000, 11, 0)) => false", () => {
  expect(timeForNoelLove(new Date(3000, 11, 0))).toBe(false);
});

test("Test case 5: timeForNoelLove() => true/false", () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();

  const isChristmas = day === 24 && month === 11;

  expect(timeForNoelLove()).toBe(isChristmas);
});
