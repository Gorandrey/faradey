$( document ).ready(function() {

//onscroll header

window.onscroll = function() {scrollFunction()};

var header = $(".header");
var headerHeight = $(".header").height();

function scrollFunction() {
    // console.log(headerHeight);
  if (window.pageYOffset > headerHeight) {
    header.css("position", "fixed");
  } else {
    header.css("position", "static");
  }
}


//slider 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        },
        1600:{
            items:3
        }
    }
});

var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
  selector.trigger('prev.owl.carousel');
});

});