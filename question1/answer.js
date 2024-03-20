// Câu 1: Tính số que diêm để xếp n nhà

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:

// - Ck thấy một ngôi nhà cần 6 que để xây. Nên ck tạo 1 const để lưu
// - Tiếp theo ck check trước các trường hợp sai (<= 0) cho trả về 0 và kết thúc hàm
// - Sau điều kiện check ở trên. đảm bảo rằng đầu vào đã hợp lệ, Tới đây mình sẽ tìm logic tính que, do các nhà nằm sát nhau nên sẽ dùng chung vách (trừ trường hợp có duy nhất 1 căn nhà)
// - Nên là bò => số que = số nhà * số que - (số nhà -1)
// + trong đó (số nhà - 1) là số vách dùng chung

function countStick(n) {
  // Viết logic xử lý tại đây
  const STICK_NUMBERS_OF_HOUSE = 6;

  if (n <= 0) return 0;

  return n * STICK_NUMBERS_OF_HOUSE - (n - 1);
}

module.exports = countStick;
