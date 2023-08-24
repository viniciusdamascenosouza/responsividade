const swiper = new Swiper('.swiper', {
    //DETAILS
    //espaço na troca
    spaceBetween: 10,

    //velocidade de troca
    speed: 400,

    //quatidade de cards
    slidesPerView: 2,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });