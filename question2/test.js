const sortDrinkByPrice = require("./question");

test("Test case 1: sortDrinkByPrice([{name: 'lemonade', price: 50}, {name: 'lime', price: 10}]) ➞ [{name: 'lime', price: 10}, {name: 'lemonade', price: 50}]", () => {
  expect(
    sortDrinkByPrice([
      { name: "lemonade", price: 50 },
      { name: "lime", price: 10 },
    ]),
  ).toEqual([
    { name: "lime", price: 10 },
    { name: "lemonade", price: 50 },
  ]);
});

test("Test case 2: sortDrinkByPrice([{name: 'lemonade', price: 50}, {name: 'lime', price: 10}, {name: 'peach', price: 50}]) ➞ [{name: 'lime', price: 10}, {name: 'lemonade', price: 50}, {name: 'peach', price: 50}]", () => {
  expect(
    sortDrinkByPrice([
      { name: "lemonade", price: 50 },
      { name: "lime", price: 10 },
      { name: "peach", price: 50 },
    ]),
  ).toEqual([
    { name: "lime", price: 10 },
    { name: "lemonade", price: 50 },
    { name: "peach", price: 50 },
  ]);
});
