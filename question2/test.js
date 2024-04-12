const cookPancakes = require("./question");

describe("Basic Tests", function () {
  it("It should pass basic tests", function () {
    expect(cookPancakes(1, 2)).toEqual(2);
    expect(cookPancakes(2, 2)).toEqual(2);
    expect(cookPancakes(3, 2)).toEqual(3);
    expect(cookPancakes(4, 2)).toEqual(4);
    expect(cookPancakes(4, 3)).toEqual(3);
    expect(cookPancakes(4, 4)).toEqual(2);
    expect(cookPancakes(1, 4)).toEqual(2);
    expect(cookPancakes(2, 3)).toEqual(2);
    expect(cookPancakes(5, 4)).toEqual(3);
    expect(cookPancakes(6, 3)).toEqual(4);
    expect(cookPancakes(6, 5)).toEqual(3);
    expect(cookPancakes(3, 1)).toEqual(6);
  });
});

// random tests
describe("Random Tests", function () {
  it("It should pass random tests", function () {
    function getRandom(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    function correctFunction(n, m) {
      if (n <= m) return 2;
      return Math.floor((n * 2) / m) + ((n * 2) % m == 0 ? 0 : 1);
    }

    for (let i = 0; i < 200; i++) {
      const n = getRandom(1, 1000);
      const m = getRandom(1, 1000);
      const expectedResult = correctFunction(n, m);
      expect(cookPancakes(n, m)).toEqual(expectedResult);
    }
  });
});
