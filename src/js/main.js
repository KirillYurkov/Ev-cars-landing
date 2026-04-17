'use strict'
// import Calendar from "./calendar.js";

let swiper = new Swiper('.futureSwiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});

