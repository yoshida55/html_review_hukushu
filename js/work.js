// スクロールした瞬間にヘッダを出力
const hamburgerBtn = document.querySelector(".hamburger_menu");

hamburgerBtn.addEventListener("click", function () {
  // オーバーレイを表示・非表示にする(openにする・外す)
  // mask.classList.toggle("open");
  // ボタン自身に .open を付けて「×」にする
  hamburgerBtn.classList.toggle("open");
  // ナビゲーションメニューを表示・非表示にする
  // gNav.classList.toggle("open");
});

// アクセスセクションがスクロールされた時だけ背景の画像を表示
const accessSection = document.querySelector(".access_area");
const accessBg = document.querySelector(".bg");
window.addEventListener("scroll", function () {
  const accessSectionTop = accessSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (accessSectionTop < windowHeight) {
    accessBg.classList.add("visible");
  } else {
    accessBg.classList.remove("visible");
  }
});
