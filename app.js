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
