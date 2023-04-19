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
