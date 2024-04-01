// Câu 1: Nhét vào giữa mảng

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// - Đầu tiên, ck sẽ tạo một mảng rỗng result để chứa kết quả.
// - Tiếp theo, ck sẽ tìm vị trí giữa của mảng arr1 bằng cách lấy chiều dài của mảng arr1 chia 2 và làm tròn lên. Hàm Math.ceil() sẽ làm tròn số lên. Ví dụ: Math.ceil(3.14) sẽ trả về 4. Lý do dùng tròn lên là do nếu mảng arr1 có số phần tử lẻ, thì phần tử giữa  sẽ là vị trí bên phải của phần tử giữa.
// - Sau đó, ck sẽ tạo một mảng arr2 bằng cách flat các mảng còn lại trong restArr.
// - Nếu mảng arr1 chỉ chứa 1 phần tử, ck sẽ trả về mảng mới với phần tử đó và các phần tử trong arr2.
// - Nếu mảng arr1 có nhiều hơn 1 phần tử, ck sẽ duyệt qua từng phần tử trong arr1. Khi duyệt đến vị trí giữa, ck sẽ thêm tất cả các phần tử trong arr2 vào mảng result nếu không phải vị trí ở giữa thì ck sẽ thêm phần tử đó vào mảng result.
// - Cuối cùng, ck sẽ trả về mảng result.

function tuckInArray(arr1, ...restArr) {
  // Viết logic xử lý tại đây
  let result = [];

  let mid = Math.ceil(arr1.length / 2);
  const arr2 = restArr.flat();

  if (arr1.length === 1) {
    return [arr1[0], ...arr2];
  }

  for (let i = 0; i < arr1.length; i++) {
    if (i === mid) {
      result.push(...arr2);
    }
    result.push(arr1[i]);
  }

  return result;
}

module.exports = tuckInArray;
