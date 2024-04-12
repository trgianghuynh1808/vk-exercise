const histogram = require("./question");

function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from);
}

function an(results) {
  return results
    .map((x, i) => `${i + 1}|${x == 0 ? "" : "#".repeat(x) + " " + x}` + "\n")
    .reverse()
    .join("");
}

describe("Basic Tests", function () {
  it("Example: histogram([7, 3, 10, 1, 0, 5])", function () {
    let rr = `6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`;
    let hist = histogram([7, 3, 10, 1, 0, 5]);
    expect("\n" + hist).toEqual("\n" + rr);
  });

  it("All zeros: histogram([0, 0, 0, 0, 0, 0])", function () {
    let rr = `6|
5|
4|
3|
2|
1|
`;
    let hist = histogram([0, 0, 0, 0, 0, 0]);
    expect("\n" + hist).toEqual("\n" + rr);
  });
});

describe("Random Tests", function () {
  it("Random", function () {
    for (let iii = 0; iii < 100; iii++) {
      let rrr = [
          rand(0, 30),
          rand(0, 15),
          rand(0, 15),
          rand(0, 15),
          rand(0, 15),
          rand(0, 15),
        ],
        t1 = an(rrr),
        hist = histogram(rrr);

      expect("\n" + hist).toEqual("\n" + t1);
    }
  });
});
