const reverseStr = require("./question");

test('Test case 1: const fn = reverseStr(); const result = fn("apple") -> result = "elppa"', () => {
  const fn = reverseStr();
  expect(fn("apple")).toEqual("elppa");
});

test('Test case 2: const fn = reverseStr(); const result = fn("pear") -> result = "raep"', () => {
  const fn = reverseStr();
  expect(fn("pear")).toEqual("raep");
});

test('Test case 3: const fn = reverseStr(); const result = fn("") -> result = ""', () => {
  const fn = reverseStr();
  expect(fn("")).toEqual("");
});
