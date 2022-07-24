const accordionItemHeaders = document.querySelectorAll(
  ".accordion__item__header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
  });
});

const options = {};

const swiperView = document.querySelector(".third");
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      swiper.autoplay.start();
      console.log("AUTOPLAY");
    } else {
      swiper.autoplay.stop();
      console.log("NO AUTOPLAY");
    }
  });
}, options);

observer.observe(swiperView);

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
  } else {
    logo.src = "LogoWhite.svg";
  }
});

window.addEventListener("resize", function (window) {
  newWidth = document.documentElement.clientWidth;
  newHeight = document.documentElement.clientHeight;
  if (newWidth > 935) {
    mobileNav.classList.remove("is-active");
    hamburger.classList.remove("is-active");
    logo.src = "6FLMainLogo.svg";
  } else {
    logo.src = "LogoWhite.svg";
  }
});
