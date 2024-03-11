// Câu 1: Tính tổng các phần tử trong mảng

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// * Ck dùng nullish "??" để check trường hợp nếu nta truyền vào "undefined" thì  sẽ lấy "[]" làm giá trị. Để bảo đảm rằng luôn dùng được array method là "reduce"
// * Sử dụng "reduce" array method để tính tổng, vì nó có cho mình truyền giá trị khởi tạo. Ck đang truyền là "0" nên nếu nta truyền vào mảng rổng thì nó sẽ tự trả về 0

function sumArr(arr) {
  // Viết logic xử lý tại đây
  return (arr ?? []).reduce((a, b) => a + b, 0);
}

module.exports = sumArr;
