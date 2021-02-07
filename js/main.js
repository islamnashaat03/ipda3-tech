
$('.owl-carousel').owlCarousel({
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

