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
        window.location.href =
          "https://sites.google.com/view/mdideas/about?authuser=0";
      } else if (this.getAttribute("href") == "#project") {
        window.location.href =
          "https://sites.google.com/view/mdideas/home-page?authuser=0";
      } else if (this.getAttribute("href") == "#admob") {
        window.location.href = "app-ads.txt";
      } else if (this.getAttribute("href") == "#privacy") {
        window.location.href = "privacy_policy.html";
      } else if (this.getAttribute("href") == "#learning") {
        window.location.href = "learning/learning.html";
      } else {
        targetContent.style.display = "block";
      }
    });
  });
});
