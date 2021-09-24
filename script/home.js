$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');

        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Slide up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["FreeLancer", "Frontend Developer", "Youtuber"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    
    var typed = new Typed(".typing2", {
        strings: ["FreeLancer", "Frontend Developer", "Youtuber"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });


    // Menu Btn Toggle Script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn .fa-bars').toggleClass('active')
        $('.menu-btn .fa-times').toggleClass('active')
    });

    // owl carousel script

    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },

            600:{
                items:2,
                nav:true
            },


            1000:{
                items:3,
                nav:true
            },
        }
    });
});