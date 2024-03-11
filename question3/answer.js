// Câu 3: Tính tổng từ một đến n

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// - ck sử dụng Array object built-in của Javascript.  Khi mình truyền một số vào  Array(10) thì sẽ tạo ra một mảng 10 phần tử.
// sau đó dùng method "keys" để lấy index của mảng vừa tạo ra. => Mình sẽ có được 1 mảng  [0, 1, 2, 3 .... 9]
// - Do đó để tính được giá trị từ 1 đến n ck dùng Array(n + 1). Goy dùng spread "..." ra sau do reduce để tính tổng

function sumN(n) {
  // Viết logic xử lý tại đây
  return [...Array(n + 1).keys()].reduce((a, b) => a + b, 0);
}

module.exports = sumN;
