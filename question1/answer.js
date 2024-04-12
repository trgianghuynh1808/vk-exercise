// Câu 1: Histogram - H1

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích đề:
// Đề này là họ muốn vợ in ra 1 chuỗi có 6 dòng mỗi dòng đều có xuống hàng.
// Nội dung của từng dòng sẽ là: "số thứ tự từ 6 -> 1"|"dấu thăng tượng trưng cho số điểm lắc được (5 điểm thì 5 dấu #)" "số điểm"
// Nếu lắc được 0 điểm thì chỉ in số thứ tự

// Ví dụ:
// `
// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
// `

// Cách làm:
// Ck dùng map để tạo ra một mảng mỗi phần tử là mỗi dòng.
// Ở từng vòng lặp trong map ck sẽ dùng repeat để trả về chuỗi "###..."
// Sau đó đảo ngược mảng vì đề cần mình in từ 6 -> 1
// Rồi join lại để tạo ra một chuỗi

function histogram(results) {
  // Viết logic xử lý tại đây
  return results
    .map((j, i) => `${i + 1}|${j == 0 ? "" : "#".repeat(j) + " " + j}` + "\n")
    .reverse()
    .join("");
}

module.exports = histogram;
