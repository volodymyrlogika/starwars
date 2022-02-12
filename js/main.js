$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    navClass: ["slider-nav-left","slider-nav-right"],
    responsive:{
        0:{
            items:1
        },
        560:{
            items:2
        },
        780:{
          items:3
       },
        1060:{
            items:4
        }
    }
})
});