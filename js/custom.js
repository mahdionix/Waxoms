$(function(){

// banner part start

$('.banner_main').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:".prev",
    nextArrow:".next",
    dots:true
  });

// banner part end

// project part start

var mixer = mixitup('.project_main');

// project part end

// video part start

$(document).ready(function(){
  $('.venobox').venobox(); 
});

// video part end

// number part start

$('.num').counterUp({
  delay: 10,
  time: 1000
});

// number part end

// post part start

$('.post_slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'.p_pre',
  nextArrow:'.p_next',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});


// post part end

// project part start

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

// project part end

});