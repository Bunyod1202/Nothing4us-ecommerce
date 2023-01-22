
const elTabItems = document.querySelectorAll(".tab__item");
const elTabLinks = document.querySelectorAll(".tab__link");
var elPanelItems = document.querySelectorAll(".panel__item");

elTabLinks.forEach(function (link) {

  link.addEventListener("click", function (evt) {
    evt.preventDefault();

    elTabItems.forEach(function (item) {
      item.classList.remove("tab__item--active");
    })

    link.parentElement.classList.add("tab__item--active");

    elPanelItems.forEach(function (panel) {
      panel.classList.remove("panel__item--active");
    })

    document.querySelector(link.getAttribute("href")).classList.add("panel__item--active");
    
  })
})

$('.hero-owl-carousel').owlCarousel({
  loop: true,
  margin: 32,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  smartSpeed:500,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    670: {
      items: 1.5,
      nav: true
    },
    
    1037: {
      items: 2,
      nav: true,

},
  1223: {
      items: 2.2,
      nav: true,

    },
    1246: {
      items: 2.2,
      nav: true,

    },
    1280: {
      items: 2.2,
      nav: true,

    },
    1485: {
      items: 2.5,
      nav: true,

    },
    1510: {
      items: 3,
      nav: true,

    },
    1732: {
      items: 3.5,
      nav: true,

    },
  }

})

$('.testimonials-owl-carousel').owlCarousel({
  loop: true,
  margin: 32,
  nav: true,
  dots: true,
  smartSpeed:700,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    670: {
      items: 1,

    },
    
    1037: {
      items: 1,


    },
    1223: {
      items: 1,


    },
  
  }
})
$('.own-creation-owl-carousel').owlCarousel({
  loop: true,
  margin: 32, 
  smartSpeed:700,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 1,

    },
    1200: {
      items: 1.5,

    },
    
    1467: {
      items: 3,


    },
    1900: {
      items: 3.5,
    },
  
  }
})