// Câu 3: Hoán đối vị trí phần tử lớn nhất trong 2 mảng

// Vợ viết logic cho function "largestWrapArr" ck đã khai báo sẵn.

// * Input:
// - arr1: là một mảng các chữ số (có thể là mảng rỗng)
// - arr2: là một mảng các chữ số (có thể là mảng rỗng)

// * Output:
// Trả về mảng 2D với phần tử đầu tiên là arr1 và phần tử thứ 2 là arr2 sau khi thay đổi vị trí của 2 phần tử lớn nhất.
// Nếu trong mảng có 2 phân tử cùng lớn nhất, trao đổi vị trí phần tử lớn nhất đầu tiên

// * Ví dụ:
// largestWrapArr([3, 1, 5, 2], [9, 2, 6, 3, 8]) ➞ [[3, 1, 9, 2], [5, 2, 6, 3, 8]]
// largestWrapArr([3, 5, 5, 2], [9, 2, 6, 9, 8]) ➞ [[3, 9, 5, 2], [5, 2, 6, 9, 8]]
// largestWrapArr([], [1, 2, 3]) ➞ [[], [1, 2, 3]]
// largestWrapArr([4, 5, 6], []) ➞ [[4, 5, 6], []]

function largestSwapArr(arr1, arr2) {
  // Viết logic xử lý tại đây

  if (arr1.length === 0 || arr2.length === 0) {
    return [arr1, arr2];
  }
  const max1 = Math.max(...arr1);
  const max2 = Math.max(...arr2);
  const maxIndex1 = arr1.findIndex((item) => item === max1);
  const maxIndex2 = arr2.findIndex((item) => item === max2);
  const newArr1 = [...arr1];
  const newArr2 = [...arr2];
  newArr1[maxIndex1] = max2;
  newArr2[maxIndex2] = max1;
  return [newArr1, newArr2];
}

module.exports = largestSwapArr;
