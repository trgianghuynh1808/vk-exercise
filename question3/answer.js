// Câu 3: Hum nay có phải ngày tình êu hem?

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:

// - Đầu tiên vợ xử lý case không truyền gì thì sẽ là ngày hiện tại. Để lấy ngày hiện tại mình sử dụng lệnh "new Date()". Ck kết hợp thêm logical OR "||" khi giá trị ở trước là Falsy thì sẽ lấy giá trị ở sau.
// - Tiếp theo vợ sử dụng method getMonth và getDate của object Date để lấy ra tháng và ngày hiện tại.
// - Sau đó vợ so sánh tháng và ngày hiện tại có bằng 11 VÀ 24 không. Nếu có thì trả về true, không thì trả về false.

function timeForNoelLove(date) {
  // Viết logic xử lý tại đây

  const currentDate = date || new Date();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  return month === 11 && day === 24;
}

module.exports = timeForNoelLove;
