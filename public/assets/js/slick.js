$(document).ready(function () {
    $('.testimonial-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
    // console.log("thisi sready dom ")
    if (window.matchMedia("(max-width: 768px)").matches) {
        // about slider
        $('.responsive-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        })
    }

    function testimonialSlider() {
        console.log("this is slider  tesimonial");
        var $slider = $(".slider-for");
        $slider.on('init', function() {
            mouseWheel($slider);
        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.round-slider', infinite: false,
            
        });
        $('.round-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            arrows: false,
            focusOnSelect: true,
            dotsClass: 'slider-paging-number'
        });
        function mouseWheel($slider) {
            $(window).on('mousewheel', {
                $slider: $slider
            }, mouseWheelHandler);
        }
       
        function mouseWheelHandler(event) {
            event.preventDefault();
            var $slider = event.data.$slider;
            var delta = event.originalEvent.deltaY;
            if (delta > 80) {
                $slider.slick('slickPrev');
                 
            } else {
                $slider.slick('slickNext');
             
            }
       }
       var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
       radius = '18em', //distance from center
       start = -90, //shift start from 0
       $elements = $('.round-slider .slider-paging-number li'),
       numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
       slice = 360 * type / numberOfElements;
       
       
       $elements.each(function (i) {
        var $self = $(this),
            rotate = slice * i + start,
            rotateReverse = rotate * -1;
       
        $self.css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
       });
       }
       
    
    testimonialSlider();

})






 // testimonial slider 
//  debugger
// function testimonialSlider() {
    
//  var $slider = $(".slider-for");
//  $slider.on('init', function() {
//      mouseWheel($slider);
//  }).slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      arrows: false,
//      fade: true,
//      asNavFor: '.round-slider', infinite: false,
     
//  });
//  $('.round-slider').slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      asNavFor: '.slider-for',
//      dots: true,
//      centerMode: true,
//      arrows: false,
//      focusOnSelect: true,
//      dotsClass: 'slider-paging-number'
//  });
//  function mouseWheel($slider) {
//      $(window).on('mousewheel', {
//          $slider: $slider
//      }, mouseWheelHandler);
//  }

//  function mouseWheelHandler(event) {
//      event.preventDefault();
//      var $slider = event.data.$slider;
//      var delta = event.originalEvent.deltaY;
//      if (delta > 80) {
//          $slider.slick('slickPrev');
          
//      } else {
//          $slider.slick('slickNext');
      
//      }
// }
// var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
// radius = '18em', //distance from center
// start = -90, //shift start from 0
// $elements = $('.round-slider .slider-paging-number li'),
// numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
// slice = 360 * type / numberOfElements;


// $elements.each(function (i) {
//  var $self = $(this),
//      rotate = slice * i + start,
//      rotateReverse = rotate * -1;

//  $self.css({
//      'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
//  });
// });
// }
