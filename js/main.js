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
