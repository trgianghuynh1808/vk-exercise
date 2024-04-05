// Câu 1: Slightly Superior

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// Đầu tiên ck sẽ tìm phần tử khác nhau của từng mảng
// Nếu không tìm ra phần tử khác, nghĩa là 2 mảng đang giống nhau. Bò trả về false luôn
// Nếu tìm ra 2 phần từ khác nhau bò sẽ so sánh 2 phần tử

function isFirstSuperior(arr1, ...restArr) {
  // Viết logic xử lý tại đây
  const [diffArr1, diffArr2] = [
    arr1.find((item) => {
      return !arr2.includes(item);
    }),
    arr2.find((item) => {
      return !arr1.includes(item);
    }),
  ];

  if (diffArr1 === undefined || diffArr2 === undefined) {
    return false;
  }

  return diffArr1 > diffArr2;
}

module.exports = isFirstSuperior;
