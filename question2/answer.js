// Câu 2: Fast cooking pancakes

// những bài đố kiểu ni ck sẽ comment ở từng dòng code chỗ dễ hiểu nhóe

function cookPancakes(n, m) {
  // Viết logic xử lý tại đây
  // timeToFry là thời gian nấu. 1 phút 1 mặt => nướng cái bánh 2 mặt cần 2 phút
  const timeToFry = 2;

  // số lần cần nấu ck chia làm tròn lên. Ví dụ: nấu 4 bánh (n = 4) mỗi lần nấu được 2 cái (m =2) vậy thì sẽ mất 2 lần nấu
  const cookTimes = Math.ceil(n / m);
  // thời gian hoàn thành dự kiến lấy thời gian nấu * với số lần
  const completeTime = cookTimes * timeToFry;

  // nếu số bánh bé hơn số bánh có thể nấu trong 1 lần ck trả về 2 phút lun
  if (n < m) return timeToFry;

  // Khúc này lắt léo nè, Ck ví dụ nhóe:
  // Nếu e có 3 cái bánh cần nấu. Mỗi lần nấu được 2 cái. Theo mindset thông thường là e sẽ mất 4 phút đúng hông? lần đầu nấu 2 cái hết 2 phút. Lần sau nấu thêm cái nữa + thêm 2 phút.
  // Nhưng nó k phải là thời gian minimum. Mình có thể nướng theo cách khác
  // Phút thứ nhất mình nướng cái bánh 1 và 2.
  // Phút thứ hai mình lật bánh 1 nướng tiếp. Bánh 2 mới chín được 1 mặt mình lấy ra. Để bánh số 3 vô nướng.
  // Phút thứ 3. Bánh 1 chín rùi. Bánh 3 lật mặt nướng. Bỏ bánh 2 vô nướng mặt còn lại.
  // Dịlà mất có 3 phút thui :))))
  //
  // Để thuật toán hóa ck sẽ chia lấy dư, vì chỉ có thể tiết kiệm được thời gian với case lần cuối cùng chảo còn dư chỗ. => n / m phải dư. ck lấy phần dư so sánh nếu nó != 0 vậy là mình biết dư nè.
  // Chỉ dư thui thì hem đủ, ví dụ nếu số bánh nó dư ra ở cái lần nướng cuối á. mà nó lớn hơn 1 nửa số bánh có thể nướng trong 1 lần. Thì cũng k tiết kiệm được. Buộc phải nướng cho hết thui.
  // Nên là check thêm điều kiện modeTime * 2 <= m
  // Vậy nếu thỏa 2 điều kiện trên mình sẽ tiết kiệm được 1 phút. nên ck đem đi -1

  const modTime = n % m;

  return modTime !== 0 && modTime * 2 <= m ? completeTime - 1 : completeTime;
}

module.exports = cookPancakes;
