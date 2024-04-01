// Câu 1: Nhét vào giữa mảng

// Vợ viết logic cho function "tuckInArray" ck đã khai báo sẵn.

// * Input:
// - arr1: là một array number
// - ...restArr: là một array number, hoặc nhiều array number (có thể là mảng rỗng)

// * Output:
// - Hàm sẽ trả về một mảng mới, trong đó mảng thứ 2 sẽ được nhét vào giữa mảng thứ nhất:

// Ví dụ:
// tuckInArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckInArray([1, 2], [3, 4]) ➞ [1, 3, 4, 2]
// tuckInArray([1], [2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5]
// tuckInArray([1, 2, 3], [4]) ➞ [1, 2, 4, 3] // Nếu mảng thứ nhất có số phần tử lẻ, thì mảng thứ 2 sẽ được nhét vào bên phải phần tử giữa của mảng thứ nhất
// tuckInArray([1, 2, 3, 4], [5, 6], [7, 8]) ➞ [1, 2, 5, 6, 7, 8, 3, 4] // Nếu restArr có nhiều hơn 1 mảng thì nhét toàn bộ các phần tử của restArr vào giữa mảng thứ nhất
// tuckInArray([1, 2, 3, 4], [5, 6], [], [9]) ➞ [1, 2, 5, 6, 9, 3, 4]

function tuckInArray(arr1, ...restArr) {
  // Viết logic xử lý tại đây
}

module.exports = tuckInArray;
