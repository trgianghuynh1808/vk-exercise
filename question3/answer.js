// Câu 3: Tile Teamwork Tactics

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// Bài này logic hui, ck lấy expect - cho số điểm vợ lắc được nếu <= 6 là khả thi

function possibleBonus(tile1, expect) {
  // Viết logic xử lý tại đây
  return expect - tile1 <= 6;
}

module.exports = possibleBonus;
