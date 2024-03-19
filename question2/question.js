// Câu 2: Chuyển từ giờ sang phút

// Vợ viết logic cho function "convertHoursToMinutes" ck đã khai báo sẵn.
// * Input:
// - argument đầu tiên: là một số tự nhiên tượng trưng cho số giờ (người dùng có thể truyền "undefined")
// - argument thứ hai: là một số tự nhiên tượng trưng cho số phút (người dùng có thể  không truyền hoặc truyền "undefined")

// * Output:
// Trả về tống số phút. Nếu người dùng không truyền hoặc truyền "undefined" sẽ xem như args đó bằng 0

// Ví dụ:
// convertHoursToMinutes(1, 10) => 70
// convertHoursToMinutes(undefined, 10) => 10
// convertHoursToMinutes(3) => 180

function convertHoursToMinutes(hours, minutes) {
  // Viết logic xử lý tại đây
  if (minutes) {
    return hours === undefined ? minutes : hours * 60 + minutes;
  } else {
    return hours * 60;
  }
}

module.exports = convertHoursToMinutes;
