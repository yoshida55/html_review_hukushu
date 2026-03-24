// ハンバーガーメニュー選択時にグローバルメニューを表示
const hamburgerBtn = document.querySelector(".header_area");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
});

// アクセスセクションがスクロールされた時だけ背景の画像を表示
const accessSection = document.querySelector(".access_title");
const accessBg = document.querySelector(".bg");
const contactSection = document.querySelector(".contact_title");

window.addEventListener("scroll", function () {
  const accessSectionTop = accessSection.getBoundingClientRect().top;
  const contactSectionTop = contactSection.getBoundingClientRect().top; // 次のタイトルの位置を取得
  const windowHeight = window.innerHeight;

  // 「アクセスセクションが画面内にあり」かつ「コンタクトのタイトルがまだ画面に入っていない」場合
  if (accessSectionTop < windowHeight && contactSectionTop > windowHeight) {
    accessBg.classList.add("visible");
  } else {
    // 上記以外（まだ表示前、アクセスセクションを過ぎた、またはコンタクトのタイトルが見えた）は非表示
    accessBg.classList.remove("visible");
  }
});

// Hello Flower!FA EXHIBITION 2021が表示されたら　ハンバーガーメニューを表示
const headerArea = document.querySelector(".header_area");
const infoTitle = document.querySelector(".under_title");

window.addEventListener("scroll", function () {
  const infoTitleTop = infoTitle.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (infoTitleTop < windowHeight) {
    headerArea.classList.add("visible");
  } else {
    headerArea.classList.remove("visible");
  }
});

// PC表示（900px以上）: スクロールで拡大

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const imgs = document.querySelectorAll(".main_logo_img");

  if (window.innerWidth > 900) {
    // PC: スクロール量 ÷ 10 を幅に加算（最大70%まで）
    imgs.forEach(function (img) {
      img.style.width = Math.min(100 / 3 + scrollTop / 10, 70) + "%";
    });
  } else {
    // SP: スクロール量 ÷ 10 を幅から減算（最小70%まで）
    imgs.forEach(function (img) {
      img.style.width = Math.max(100 - scrollTop / 10, 70) + "%";
    });
  }
});

// GALLERYのタイトルが出現したタイミングで右のサイドリンクを表示
const galleryArea = document.querySelector(".gallery_area"); // 対象の要素を取得
const sideArea = document.querySelector(".side_area"); // クラスを付与する要素を取得
const accessArea = document.querySelector(".access_area"); // 追加：アクセスエリアを取得

window.addEventListener("scroll", function () {
  const galleryTop = galleryArea.getBoundingClientRect().top;
  const accessTop = accessArea.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // 「ギャラリーが画面半分より上」かつ「アクセスエリアがまだ画面下にある（入っていない）」間だけ表示
  if (galleryTop < windowHeight / 2 && accessTop > windowHeight) {
    sideArea.classList.add("open");
  } else {
    // それ以外（ギャラリー前、またはアクセス後）は非表示
    sideArea.classList.remove("open");
  }
});

/* ✨
Q: ギャラリータイトルが出現したら,openをside_areaにつける

ご提示のコードの末尾に、以下の処理を追加することで実現できます。

const galleryArea = document.querySelector(".gallery_area"); // 対象の要素を取得
const sideArea = document.querySelector(".side_area"); // クラスを付与する要素を取得

window.addEventListener("scroll", function () {
  const galleryTop = galleryArea.getBoundingClientRect().top;
  
  // 画面の高さの半分より上にタイトルが来たらクラスを付与、そうでなければ削除
  if (galleryTop < window.innerHeight / 2) {
    sideArea.classList.add("open");
  } else {
    sideArea.classList.remove("open");
  }
});

### 修正のポイント
1.  **ID指定の修正**: 元のコードにあった `getElementById(".gallery_area...")` はID指定用のため、クラス指定ができる `querySelector` に変更しました。
2.  **条件判定**: `getBoundingClientRect().top` を使い、要素が画面の上部まで来たタイミングで `classList.add("open")` を実行するようにしています。
*/
