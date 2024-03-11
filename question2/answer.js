// Câu 2: Chuyển từ giờ sang phút

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// * Ck dùng nullish "??" để check trường hợp nếu nta truyền vào "undefined" thì sẽ gáng = 0, sau đó quy đổi từ giờ sang phút

function convertHoursToMinutes(hours, minutes) {
  // Viết logic xử lý tại đây
  return (hours ?? 0) * 60 + (minutes ?? 0);
}

module.exports = convertHoursToMinutes;
