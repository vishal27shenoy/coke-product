const menuOpen = document.querySelector(".menu_open");
const menuClose = document.querySelector(".menu_close");
const nav_con = document.querySelector(".navbar_container");
const rnc = document.querySelector(".right_navbar_container");
const rnc_child = Array.from(rnc.children);
function openORclose(id) {
  console.log(rnc_child);
  if (id == "open") {
    console.log("hello");
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  } else {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
  nav_con.classList.toggle("responsiveheight");
}
var quantity = document.querySelector("#quantity");
var toprint = document.querySelector(".toprint");
var img_main = document.querySelector(".main-img");
const tochangeimg = document.querySelector(".product_image_container");
const dialog = document.querySelector("dialog");
function changevalue() {
  toprint.innerHTML = `cost : ${60 * quantity.value}₹`;
}
function cangeimg(e) {
  img_main.src = e;
}
function closedialog(id) {
  console.log(id);
  if (id == "open") {
    dialog.show();
    disableScroll();
  } else {
    dialog.close();
    enableScroll();
  }
}
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
function defaultclose() {
  dialog.close();
}

// popup
const arr = [
  "CocaCola",
  "Fanta",
  "CocaCola - Zero",
  "CocaCola - Light",
  " Sprite",
  "Diet Coke - Cherry",
];
const popup_con = document.querySelector(".product_info_cntainer_popup");
const popup_img = document.querySelector(".popup_img");
const popup_name = document.querySelector(".img_info_font_style_one");
const popup_description = document.querySelector(".img_info_font_description");
const popup_close = document.querySelector(".popup_cross_btn");
function changepopup(src, id) {
  console.log("hell");
  popup_con.style.display = "block";
  popup_img.src = src;
  popup_name.innerHTML = arr[id - 1];
}
function closepopup() {
  popup_con.style.display = "none";
}
