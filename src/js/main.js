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
});

