$('.hero-owl-carousel').owlCarousel({
  loop: true,
  margin: 32,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
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


let elBody = document.querySelector("body");
let elProfile = document.querySelector(".header-icon__profile");
let elXmark = document.querySelector(".modal-wrapper__xmark-wrap");
let elModal = document.querySelector(".modals")

elProfile.addEventListener("click", function(evt) {
  elModal.classList.add("modals-active");
  elBody.classList.add("modalhidden");
});

elXmark.addEventListener("click", function(evt) {
  elModal.classList.remove("modals-active");
  elBody.classList.remove("modalhidden");

});

let elBodys = document.querySelector("body");
let elHeaderBar = document.querySelector(".header-bar");
let elHeaderBars = document.querySelector(".header-bars");
let elHeaderModal = document.querySelector(".header-modal");
let elXmarkModal = document.querySelector(".header-modal__mark");

elHeaderBar.addEventListener("click", function(evt) {
  elHeaderModal.classList.add("header-modal-active");
  elBodys.classList.add("header-modal-scroll")
})

elHeaderBars.addEventListener("click", function(evt) {
  elHeaderModal.classList.add("header-modal-active");
  elBodys.classList.add("header-modal-scroll")
})

elXmarkModal.addEventListener("click", function(evt) {
  elHeaderModal.classList.remove("header-modal-active");
  elBodys.classList.remove("header-modal-scroll")
})



