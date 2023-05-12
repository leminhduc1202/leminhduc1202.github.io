document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Ẩn tất cả nội dung tab-content
        tabContents.forEach(function(content) {
          content.style.display = 'none';
        });
  
        // Lấy id của tab-content tương ứng
        const target = this.getAttribute('href').substring(1);
        const targetContent = document.getElementById(target);
  
        if (this.getAttribute('href') == "#about") {
          window.location.href = "home.html"
        } else {
           // Hiển thị nội dung tab-content tương ứng
        targetContent.style.display = 'block';
        }
      });
    });
  });