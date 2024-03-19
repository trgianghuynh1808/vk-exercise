// Câu 1: Tính tổng các phần tử trong mảng

// Vợ viết logic cho function "sumArr" ck đã khai báo sẵn.
// * Input:
// - Một mảng các số tự nhiên. Có thể là:
// + Có n số tự nhiên
// + Là một mảng rỗng hoặc không truyền

// * Output:
// TH1: Nếu đầu vào là mảng n số tự nhiên => tổng các phần tử trong mảng
// TH2: Nếu là mảng rỗng hoặc không truyền => 0

function sumArr(arr) {
  // Viết logic xử lý tại đây
  if (arr !== undefined) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else {
    return 0;
  }
}

module.exports = sumArr;
