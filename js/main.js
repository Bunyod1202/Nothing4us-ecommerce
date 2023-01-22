const elTabItems = document.querySelectorAll(".tab__item");
const elTabLinks = document.querySelectorAll(".tab__link");
var elPanelItems = document.querySelectorAll(".panel__item");

elTabLinks.forEach(function(link){

  link.addEventListener("click" , function(evt){
    evt.preventDefault();

    elTabItems.forEach(function(item){
      item.classList.remove("tab__item--active");
    })

    link.parentElement.classList.add("tab__item--active");

    elPanelItems.forEach(function(panel){
      panel.classList.remove("panel__item--active");
    })

    document.querySelector(link.getAttribute("href")).classList.add("panel__item--active");
    
  })
})