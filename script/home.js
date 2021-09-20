$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');

        }
    });

    // Menu Btn Toggle Script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn .fa-bars').toggleClass('active')
        $('.menu-btn .fa-times').toggleClass('active')
    });
});