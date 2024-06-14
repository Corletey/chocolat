// const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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