// スクロールした瞬間にヘッダを出力
const hamburgerBtn = document.querySelector(".hamburger_menu");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
});
console.log("はいっている０");
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
console.log("はいっている０．５");
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

// スクロールすると３つならんだ花のサイズがおおきくなる

// メインビジュアル画像のスクロール連動拡大・縮小
// $(window).on("scroll", function () {
//   const scrollTop = $(this).scrollTop();

//   // PC表示（900px以上）: スクロールで拡大
//   if (window.innerWidth >= 900) {
//     // 初期33% → スクロール500pxで40%まで拡大
//     const newWidth = 100 / 3 + (scrollTop / 500) * 20; // 最大40%
//     const maxWidth = 70;
//     $(".main_logo_img").css("width", Math.min(newWidth, maxWidth) + "%");
//   }
//   // SP表示（900px未満）: スクロールで縮小
//   else {
//     // 初期100% → スクロール300pxで70%まで縮小
//     const newWidth = 100 - (scrollTop / 300) * 30; // 最小70%
//     const minWidth = 70;
//     $(".main_logo_img").css("width", Math.max(newWidth, minWidth) + "%");
//   }
// });

// PC表示（900px以上）: スクロールで拡大
console.log("はいっている０．３");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const imgs = document.querySelectorAll(".main_logo_img");

  if (window.innerWidth > 900) {
    // PC: スクロール量 ÷ 10 を幅に加算
    imgs.forEach(function (img) {
      img.style.width = 100 / 3 + scrollTop / 10 + "%";
    });
  } else {
    // SP: スクロール量 ÷ 10 を幅から減算
    imgs.forEach(function (img) {
      img.style.width = 100 - scrollTop / 10 + "%";
    });
  }
});
