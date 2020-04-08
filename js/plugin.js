/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    // Smooth scroll to div
    
    $('.navbar-nav li a').click(function (e) {
        
        e.preventDefault();
        
        $('html , body').animate({
             
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
    });

    
    // fixed menu
    $('.fixed-menu .fa-gear').on('click', function () {
        
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        
        if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
            
            $(this).parent('.fixed-menu').animate({
                
                left: 0
                
            }, 500);
            $('body').animate({
                
                paddingLeft: '280px'
                
            }, 500);
        } else {
            
            $(this).parent('.fixed-menu').animate({
                
                left: '-280px'
                
            }, 500);
            
            $('body').animate({
                
                paddingLeft: 0
                
            }, 500);
        }
        
    });
    
    // gallery shuffl
    
    $('.portfolio ul li').on('click', function () {
        
        $(this).addClass('slicted').siblings().removeClass('slicted');
    });
    
    $('#container').mixItUp();
    
    $('.timer').countTo({
        
        speed: 40000,
        refreshInterval: 80
        
    });
    
    // Swaper
        var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 2,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
});
// Wrap every letter in a span
$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [3,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
