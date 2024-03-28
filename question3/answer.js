// Câu 3: Hoán đối vị trí phần tử lớn nhất trong 2 mảng

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:

// Đầu tiên ck xử lý case đặc biệt trước. 1 trong 2 thằng rỗng, trả về input ban đầu
// Tiếp theo tìm giá trị max trong từng arr. Ck sử dụng destructuring để làm gọn syntax. vì cả 2 đều sử dụng hàm Math.max
// Tương tự với index. Tìm vị trí để đi hoán đổi
// Sau đó gán giá trị lớn nhất cho nhau và trả về mảng 2 chiều ợ

function largestSwapArr(date) {
  // Viết logic xử lý tại đây
  if (arr1.length === 0 || arr2.length === 0) return [arr1, arr2];

  const [firstMax, secondMax] = [Math.max(...arr1), Math.max(...arr2)];
  const [firstMaxIndex, secondMaxIndex] = [
    arr1.indexOf(firstMax),
    arr2.indexOf(secondMax),
  ];

  arr1[firstMaxIndex] = secondMax;
  arr2[secondMaxIndex] = firstMax;

  return [arr1, arr2];
}

module.exports = largestSwapArr;
