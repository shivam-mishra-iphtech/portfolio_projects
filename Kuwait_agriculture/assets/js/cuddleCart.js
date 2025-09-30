$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      dots:true,
      dotsEach:true,  // ✅ each blog item gets its own dot
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        992:{ items:4 }
      }
    });
  });