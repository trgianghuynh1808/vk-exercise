// Câu 2: Hoán đối giá trị lớn

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// Đầu tiên, ck dùng hàm toString() để chuyển số thành chuỗi
// Sau đó split("") để chuyển chuỗi thành mảng và destructuring để lấy giá trị của 2 phần tử trong mảng
// So sánh 2 giá trị với nhau. Chỗ nì thì mình có thể nghĩ ngược lại, nếu sau swap cần a <= b vậy thì mình kiểm tra trc wrap a >= b. Khỏi cần xử lý wrap ợ

function largestSwap(arr) {
  // Viết logic xử lý tại đây
  const numStr = number.toString();
  const [first, second] = numStr.split("");

  return first >= second;
}

module.exports = largestSwap;
