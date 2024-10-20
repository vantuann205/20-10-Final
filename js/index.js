(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

/* Gift */
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    const text = "Vui lòng chọn một phần quà dưới đây"; // Nội dung văn bản
    textElement.textContent = ''; // Xóa nội dung ban đầu

    let index = 0; // Biến để theo dõi ký tự hiện tại

    const typeText = () => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index); // Thêm ký tự vào văn bản
            index++; // Tăng chỉ số
            setTimeout(typeText, 100); // Đợi 100ms trước khi gõ ký tự tiếp theo
        } else {
            // Hiển thị đầy đủ chữ
            setTimeout(() => {
                // Đặt lại chỉ số về 0 và xóa nội dung sau 2 giây
                index = 0;
                textElement.textContent = ''; // Xóa nội dung
                setTimeout(typeText, 500); // Đợi 0.5 giây trước khi bắt đầu gõ lại
            }, 4000); // Đợi 2 giây trước khi bắt đầu xóa
        }
    };

    // Bắt đầu gõ sau 5 giây
    setTimeout(typeText, 7000);
});


// 
// Thêm đoạn mã này vào cuối file JS của bạn
const giftItems = document.querySelectorAll('.gift-item');
const giftInfo = document.getElementById('gift-info');

giftItems.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.getAttribute('data-text');
        const value = item.getAttribute('data-value');
        giftInfo.textContent = `${text} - Giá: ${value} VNĐ`;
    });
});

















