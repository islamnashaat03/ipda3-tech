
$('.owl-services').owlCarousel({
            loop:true,
            margin:10,
            rtl:true,
            responsiveClass:true,
            responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
            
        }
    }
});


$('.owl-clients').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    responsiveClass:true,
    responsive:{
0:{
    items:1,
    nav:false
},
600:{
    items:2,
    nav:false
},
1000:{
    items:4,
    nav:true,
    loop:true
}
}
});
$('.owl-work').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    stagePadding:2,
    slideBy:2,
    responsiveClass:true,
    responsive:{
0:{
    items:1,
    nav:false
},
600:{
    items:1,
    nav:false
},
1000:{
    items:1,
    nav:true,
    loop:false
}
}
});
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});
