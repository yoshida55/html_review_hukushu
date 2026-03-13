// スクロールした瞬間にヘッダを出力
const hamburgerBtn = document.querySelector(".hamburger_menu");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
});

// アククションがスクロールされた時だけ背景の画像を表示;
const accessSection = document.querySelector(".access_title");
const accessBg = document.querySelector(".bg");
const contactSection = document.querySelector(".contact_title");
window.addEventListener("scroll", function () {
  const accessSectionTop = accessSection.getBoundingClientRect().top;
  const contactSectionTop = contactSection.getBoundingClientRect().top; // 次のタイトルの位置を取得
  const windowHeight = window.innerHeight;

  // 「アクセスセクションが画面内にあり」かつ「コンタクトのタイトルがまだ画���に入っていない」場合
  if (accessSectionTop < windowHeight && contactSectionTop > windowHeight) {
    accessBg.classList.add("visible");
  } else {
    // 上記以外（まだ表示前、アクセスセクションを過ぎた、またはコンタクトのタイトルが見えた）は非表示
    accessBg.classList.remove("visible");
  }
});

// Hello Flower!FA EXHIBITION 2021が表示されたら　ハンバーガーメニューを表示

const hamburgerMenu = document.querySelector(".hamburger_menu");
const infoTitle = document.querySelector(".under_title");

window.addEventListener("scroll", function () {
  const infoTitleTop = infoTitle.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (infoTitleTop < windowHeight) {
    hamburgerMenu.style.display = "block";
  } else {
    hamburgerMenu.style.display = "none";
  }
});
