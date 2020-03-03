
        //Solución con jQUery
        $(document).ready(function () {
            $('.hamburger').click(function () {
                $('.hamburger').toggleClass('is-active');
                $('.menuppal').toggleClass('is-active');
            });
            //entrada de imagen
            
            $('.carousel').slick({
                centerMode: true,
                slidesToShow: 3,
                // infinite: true,
                speed: 400,
                cssEase: 'linear',
                adaptiveHeight: true,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      arrows: true,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 3
                    }
                  },
                  {
                    breakpoint: 482,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });

            
        });