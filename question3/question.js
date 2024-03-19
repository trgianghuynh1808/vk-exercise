// Câu 3: Tính tổng từ một đến n

const sumArr = require("../question1/question");

// Vợ viết logic cho function "sumN" ck đã khai báo sẵn
// * Input:
// - Một số tự nhiên n trong khoảng (1 -> 1000)

// * Output:
// - Tính tổng các số từ 1 đến n

// * Ví dụ:
// - sumN(5) => 1 + 2 + 3 + 4 +5 = 15
// - sumN(1) => 1

function sumN(n) {
  // Viết logic xử lý tại đây
  let sumArr = [];
  for (let i = 0; i <= n - 1; i++) {
    sumArr.push(i + 1);
  }
  return sumArr.reduce((a, b) => a + b);
}

module.exports = sumN;
