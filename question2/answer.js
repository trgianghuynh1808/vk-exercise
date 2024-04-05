// Câu 2: Reverse String function

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:
// Vì yêu cầu đề là trả về 1 function nên mình sẽ trả về function. Function này có 1 arg là str
// Trong func mà mình trả về á, mình sẽ viết logic đảo chuỗi. Có nhiều cách để đảo chuỗi. Cách bò đang dùng là dùng split để tách ra thành arr ký tự. Sau đó dùng method reverse của array để đảo các phần từ. Cuối cùng là dùng join để merge lại

function reverseStr() {
  // Viết logic xử lý tại đây
  return (str) => str.split("").reverse().join("");
}

module.exports = reverseStr;
