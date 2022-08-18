new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  effect: "flip",
  // Вывод стрелок навигации
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  // Вывод скроллбара
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
})
