$(document).ready(function(){
    $('.slider-one').slick({
        arrows:false,
        slidesToShow:3,
        centerMode: true,
        autoplay:true,
        speed:1000,
        slidesToScroll:1,
        autoplaySpeed:2000,
        responsive:[{
            breakpoint: 851,
            settings: {
                slidesToShow:2,
                centerMode: false,
                dots: true,
            }         
        },{
            breakpoint: 601,
            settings: {
                slidesToShow:1,
                centerMode: false,
                dots: true,
            }
        },{
            breakpoint: 301,
            settings: {
                slidesToShow:1,
                centerMode: false,
                dots: true,
            }
        }]
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
        
        autoplay:true,
        speed:1000,
        slidesToScroll:1,
        autoplaySpeed:10000,
        dots: true
    });
    $('.header-burger').click(function(event){
        $('.header-burger,.header-list').toggleClass('active');
    })
});