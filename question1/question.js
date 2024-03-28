// Câu 1: Kiểm tra tập hợp con

// Vợ viết logic cho function "canNest" ck đã khai báo sẵn.

// * Input:
// - arr1: là một array number (có thể là mảng rỗng)
// - arr2: là một array number (có thể là mảng rỗng)

// * Output:
// - Hàm sẽ trả về boolean:
// + Trả về true khi arr1 là tập hợp con của arr 2. min arr1 > min arr2 và max arr1 < max arr2
// + Nếu arr1 là tập hợp rỗng và arr2 có value  => true
// + Nếu arr1 có value nhưng arr2 là tập rỗng => false
// + Nếu cả 2 đều là tập rỗng => false

// Ví dụ:
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function canNest(arr1, arr2) {
  // Viết logic xử lý tại đây
}

module.exports = canNest;
