// Câu 2: Drink Sorting

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// - Để sắp xếp mảng drinks theo giá tăng dần, ck sẽ sử dụng method sort() của mảng.
// - Ck sẽ truyền vào hàm sort() một callback nhận vào 2 tham số a và b. Nếu a - b < 0 thì a sẽ được đặt trước b, ngược lại b sẽ được đặt trước a. Nếu a - b = 0 thì a và b sẽ không thay đổi vị trí.
//
// - Lúc này sẽ so sánh với 2 điều kiện a.price - b.price và a.name.localeCompare(b.name).
// localeCompare dùng để so sánh chuỗi theo thứ tự từ điển.

function sortDrinkByPrice(drinks) {
  // Viết logic xử lý tại đây
  return drinks.sort(
    (a, b) => a.price - b.price || a.name.localeCompare(b.name),
  );
}

module.exports = sortDrinkByPrice;
