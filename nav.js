const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

let newWidth = document.documentElement.clientWidth;
let newHeight = document.documentElement.clientHeight;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("is-active");
  hamburger.classList.toggle("is-active");
});

let logo = document.querySelector("#logo");
let group = document.querySelector(".group");
let huge = document.querySelector(".huge");

window.addEventListener("load", function (window) {
  loadWidth = document.documentElement.clientWidth;

  if (newWidth > 935) {
    logo.src = "6FLMainLogo.svg";
    group.classList.remove("shadow");
  } else {
    logo.src = "LogoWhite.svg";
    group.classList.add("shadow");
  }
});

window.addEventListener("resize", function (window) {
  newWidth = document.documentElement.clientWidth;
  newHeight = document.documentElement.clientHeight;
  if (newWidth > 935) {
    mobileNav.classList.remove("is-active");
    hamburger.classList.remove("is-active");
    group.classList.remove("shadow");
    logo.src = "6FLMainLogo.svg";
  } else {
    logo.src = "LogoWhite.svg";
    group.classList.add("shadow");
  }
});
