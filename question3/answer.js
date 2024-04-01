// Câu 3: Đếm potatoes

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// - Để đếm số lần xuất hiện của từ "potato" trong chuỗi str, ck sẽ sử dụng method split() để tách chuỗi str thành mảng các chuỗi con dựa vào chuỗi "potato".
// Sau đó, ck sẽ trả về chiều dài của mảng trừ đi 1.
// Vì nếu chuỗi str không chứa từ "potato" thì mảng sẽ có chiều dài là 1.

function countPotatoes(str) {
  // Viết logic xử lý tại đây
  return str.split("potato").length - 1;
}

module.exports = countPotatoes;
