$(function () {
    $dis = $("#nav_part").offset().top;

    $(window).scroll(function () {
        $scrolling = $(this).scrollTop();

        if ($scrolling >= $dis) {
            $("#nav_part").addClass("menu_fix");
        } else {
            $("#nav_part").removeClass("menu_fix");
        }
    })
})

$(function () {
    $("#scroll").click(function () {
        $("html,body").animate({
            scrollTop: 0

        }, 1000)
    })

    $(window).scroll(function () {
        $scrolling = $(this).scrollTop();

        if ($scrolling >= 100) {

            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    })

    $(window).load(function () {
        $(".preloader").fadeOut();
    })
    //paralax
    $(window).stellar({
        responsive: true

    });
    // idea part width responsive 

    $('.slick_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
    });

})

// pop up js
jQuery("a.demo").YouTubePopUp();
