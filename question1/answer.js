// Câu 1: Kiểm tra tập hợp con

// Đáp án nhóe vợ, cách trên chỉ tham khảo vợ có thể làm cách khác. miễn pass test case là được

// Giải thích:

// - Câu nì chủ yếu syntax hui, mình liệt kê các case cần xử lý với if ra là được ợ

function canNest(n) {
  // Viết logic xử lý tại đây
  if (arr1.length === 0 && arr2.length > 0) return true;
  if (arr1.length > 0 && arr2.length === 0) return false;
  if (arr1.length === 0 && arr2.length === 0) return false;

  if (
    Math.min(...arr1) >= Math.min(...arr2) &&
    Math.max(...arr1) <= Math.max(...arr2)
  )
    return true;

  return false;
}

module.exports = canNest;
