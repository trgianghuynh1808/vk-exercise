const rpsls = require("./question");

describe("rock paper scissors lizard spock", () => {
  it("player 1 wins", () => {
    expect(rpsls("rock", "lizard")).toEqual("Player 1 Won!");
    expect(rpsls("paper", "rock")).toEqual("Player 1 Won!");
    expect(rpsls("scissors", "lizard")).toEqual("Player 1 Won!");
    expect(rpsls("lizard", "paper")).toEqual("Player 1 Won!");
    expect(rpsls("spock", "rock")).toEqual("Player 1 Won!");
  });

  it("player 2 wins", () => {
    expect(rpsls("lizard", "scissors")).toEqual("Player 2 Won!");
    expect(rpsls("spock", "lizard")).toEqual("Player 2 Won!");
    expect(rpsls("paper", "lizard")).toEqual("Player 2 Won!");
    expect(rpsls("scissors", "spock")).toEqual("Player 2 Won!");
    expect(rpsls("rock", "spock")).toEqual("Player 2 Won!");
  });

  it("draw", () => {
    expect(rpsls("rock", "rock")).toEqual("Draw!");
    expect(rpsls("spock", "spock")).toEqual("Draw!");
  });

  it("Random test", () => {
    const ops = ["rock", "spock", "paper", "lizard", "scissors"];
    const choice = () => ops[Math.floor(Math.random() * 5)];

    function rpslsMine(pl1, pl2) {
      let attacks = ["rock", "spock", "paper", "lizard", "scissors"];
      let result =
        (((attacks.indexOf(pl1) - attacks.indexOf(pl2)) % 5) + 5) % 5;
      if (result === 0) {
        return "Draw!";
      }
      if (result >= 3) {
        return "Player 2 Won!";
      }
      return "Player 1 Won!";
    }

    for (let i = 0; i < 100; i++) {
      const a = choice(),
        b = choice();
      const reference = rpslsMine(a, b);
      const user = rpsls(a, b);
      expect(user).toEqual(reference);
    }
  });
});
