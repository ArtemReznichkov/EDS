$(document).ready(function () {


    //Mobile menu open
    $('.mobile-icon').on('click', function() {
        $('.mobile-menu').hide();
        $('.menu-block').slideToggle();
    });

    //mobile menu close
    $('.close-mobile-menu').on('click', function() {
        $('.mobile-menu').show();
        $('.menu-block').hide();
    });

    $('.main-list-element .arrow').on('click', function() {
        $( this ).parent().children('.submenu-list').slideToggle();
    });

    $('.submenu-list>li').on('click', function() {
        $( this ).children('ul').slideToggle();
    });



//    mobile accordion sidebar
    if($(window).width() <= 768) {
        $('.mobile-sidebar-accord').parent().addClass('mobile-filters');
        $('.mobile-sidebar-accord').on('click', function() {
            $( this ).next('.changed-filters').slideToggle();
            $( this ).parent().toggleClass('mobile-filters');
            $( this ).parent().siblings('.sidebar-block').slideToggle();
            $( this ).children('.accord-open').toggleClass('icon-EDS_icon-09').toggleClass('icon-EDS_icon-06');
        });
    }


    // mobile slider on project page

    $('.mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="icon-EDS_icon-08 slick-prev"></button>',
        nextArrow: '<button type="button" class="icon-EDS_icon-07 slick-next"></button>'
    });



    $("#mobile-language").on("click", function(){
        if ( $( this ).children(".widget").css('display') == 'none') {
            $( this ).children(".widget").css('display', 'flex');
        } else {
            $( this ).children(".widget").hide();
        }
    });

    // $('.menu-block').on('click', function(e) {
    //     console.log(e.target.className)
    //     if (e.target.className !== "widget" || e.target.className !== "language") {
    //         if ( $(".widget").css('display') != 'none') {
    //             $(".widget").hide();
    //         }
    //     }
    // });

})