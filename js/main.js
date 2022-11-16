$(function () {



    $('.offers__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        
        responsive: [
            {
              breakpoint: 1471,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
           
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: false,
           
              }
            },
            {
                breakpoint: 901,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
             
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: true,
                }
              },
        ]
    });
    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list__active');
    })
});



