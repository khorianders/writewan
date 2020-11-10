let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

// let a = 0;
// $(window).scroll(function () {
//   // The .offset() method allows us to retrieve the current position of an element  relative to the document
//   let oTop = $(".numbers").offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() >= oTop) {
//     a++;
//     nCount(".rect > h1");
//   }
// });



/**
 *
 *  sticky navigation
 *
 */

// let navbar = $(".navbar");

// $(window).scroll(function () {
//   // get the complete hight of window
//   let oTop = $(".contentbox").offset().top - window.innerHeight;
//   if ($(window).scrollTop() > oTop) {
//     navbar.addClass("sticky");
//   } else {
//     navbar.removeClass("sticky");
//   }
// });

  $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 100px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $(".navbar").addClass('sticky');
          } else {
              $(".navbar").removeClass('sticky');
          }
        });
});

$('.brand-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
}) 
