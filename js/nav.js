const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const desktopNav = document.querySelector(".desktop-nav");
const groupHeader = document.querySelector(".header");

let newWidth = document.documentElement.clientWidth;
let newHeight = document.documentElement.clientHeight;

const navOptions = {};

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
    group.classList.remove("shadow");
  } else {
    group.classList.add("shadow");
  }

  if (pageYOffset > 35) {
    groupHeader.classList.add("nav-scrolled");
    groupHeader.classList.add("shadow");
  } else {
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }

  if (newWidth < 935) {
    // alert(newWidth);
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }
});

window.addEventListener("resize", function (window) {
  newWidth = document.documentElement.clientWidth;
  newHeight = document.documentElement.clientHeight;
  if (newWidth > 935) {
    mobileNav.classList.remove("is-active");
    hamburger.classList.remove("is-active");
    group.classList.remove("shadow");
  } else {
    group.classList.add("shadow");
  }

  if (pageYOffset > 35) {
    groupHeader.classList.add("nav-scrolled");
    groupHeader.classList.add("shadow");
  } else {
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }

  if (newWidth < 935) {
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }
});
window.addEventListener("scroll", function () {
  console.log(pageYOffset);
  if (pageYOffset > 35) {
    groupHeader.classList.add("nav-scrolled");
    groupHeader.classList.add("shadow");
  } else {
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }

  if (newWidth < 935) {
    // alert(newWidth);
    groupHeader.classList.remove("nav-scrolled");
    groupHeader.classList.remove("shadow");
  }
});
