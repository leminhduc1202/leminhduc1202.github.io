document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // Ẩn tất cả nội dung tab-content
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Lấy id của tab-content tương ứng
      const target = this.getAttribute("href").substring(1);
      const targetContent = document.getElementById(target);

      if (this.getAttribute("href") == "#about") {
        window.location.href = "home.html";
      } else if (this.getAttribute("href") == "#project") {
        // window.location.href = "project/project-page.html"
        window.location.href =
          "https://sites.google.com/view/mdideas/s%E1%BA%A3n-ph%E1%BA%A9m?authuser=0";
      } else if (this.getAttribute("href") == "#admob") {
        window.location.href = "App-ads.txt";
      } else {
        // Hiển thị nội dung tab-content tương ứng
        targetContent.style.display = "block";
      }
    });
  });
});
