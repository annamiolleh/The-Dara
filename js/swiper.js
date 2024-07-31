
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,

  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination-fraction",
        type: "fraction",
      },

    breakpoints: {
        // when window width is >= 320px
        290: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },

        425: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },

        767: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },

        // 1025: {
        //     enabled: false,
        //     slidesPerView: 6,
        //     direction: 'vertical',
        //     allowTouchMove: false,
        //     pagination: false,
            
        // }
      }
  });





  

