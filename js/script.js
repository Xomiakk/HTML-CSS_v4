$(document).ready(function(){
    $('.slider-one').slick({
        arrows:false,
        adaptiveHeight:true,
        slidesToShow:3,
        centerMode: true,
        autoplay:true,
        speed:1000,
        slidesToScroll:1,
        autoplaySpeed:2000,
    });
    $('.slider-two').slick({
        arrows:false,
        slidesToShow:1,
        centerMode: true,
        autoplay:true,
        speed:1000,
        slidesToScroll:1,
        autoplaySpeed:10000,
        dots: true,
        waitForAnimate: false,
        fade: true
    });
    $('.slider-three').slick({
        arrows:false,
        slidesToShow:1,
        centerMode: true,
        autoplay:true,
        speed:1000,
        slidesToScroll:1,
        autoplaySpeed:10000,
        dots: true
    })
});