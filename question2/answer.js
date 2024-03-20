// Câu 2: Tìm phần tử nhỏ nhất và lớn nhất trong mảng

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// - Đầu tiên ck filter mảng, chỉ lấy các phần tử có type là number, rùi lưu vào một biến mới. (sử dụng typeof để check type)
// - Sau đó ck sử dụng method Math.min và Math.max. 2 hàm này sẽ nhận vào danh sách các args là các con số. Sau đó trả về giá trị Min Max cho mình

function findMinMax(arr) {
  // Viết logic xử lý tại đây

  const validArr = arr.filter((item) => typeof item === "number");

  return [Math.min(...validArr), Math.max(...validArr)];
}

module.exports = findMinMax;
