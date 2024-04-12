// Câu 3: Rock Paper Scissors Lizard Spock

// Cách làm:
//
// Đầu tiên là ck check trường hợp hòa trước, nếu 2 player ra giống nhau thì hòa
// Tiếp theo dựa vào hình mối liên hệ ck nhận thấy rằng vòng tròn liên hệ của tụi nó. Sẽ theo thứ tự là Thắng -> Thua -> Thắng -> Thua ...
// Ví dụ: kéo Thắng giấy  -> kéo Thua đá -> kéo Thắng tắc kè -> kéo Thua người
// Từ cơ sở trên ck tạo ra 1 mảng orderRules theo vòng tròn. Ý tưởng là lấy pl1 làm gốc lần lượt đi tới pl2 (theo sơ đồ trong hình) nếu số lẻ là pl1 thắng và ngược lại.
//
// Goy có ý tưởng rùi, nmình sẽ đi viết giải thuật theo ý tưởng.
// ck duplicate mảng orderRules ra để bảo đảm rằng lúc nào cũng đi tới được pl2. (completeRules)
// tìm vị trí của pl1
// sau đó dùng while để cho đi từng bước tới pl2. steps để lưu số bước. Điều kiện dừng là cho tới khi tìm được pl2
// sau đó lấy số step chia lấy dư (%) là xác đnh được chẵn lẻ

function rpsls(pl1, pl2) {
  //Your Magnificent Code here

  if (pl1 === pl2) return "Draw!";

  const orderRules = ["spock", "scissors", "paper", "rock", "lizard"];
  const completeRules = [...orderRules, ...orderRules];

  const indexPl1 = completeRules.findIndex((item) => item === pl1);

  let steps = 0;

  while (completeRules[indexPl1 + steps] !== pl2) {
    steps++;
  }

  const res = steps % 2 === 0 ? "Player 2 Won!" : "Player 1 Won!";

  return res;
}

module.exports = rpsls;
