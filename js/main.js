$(document).ready(function () {

    if($(window).width() < 520) {
        $('.carousel-wrapper ').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="icon-EDS_icon-08 slick-prev"></button>',
            nextArrow: '<button type="button" class="icon-EDS_icon-07 slick-prev"></button>'
        });
    } else if ($(window).width() <= 1024) {
        $('.carousel-wrapper ').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="icon-EDS_icon-08 slick-prev"></button>',
            nextArrow: '<button type="button" class="icon-EDS_icon-07 slick-prev"></button>'
        });
    } else {
        $('.carousel-wrapper ').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="icon-EDS_icon-08 slick-prev"></button>',
            nextArrow: '<button type="button" class="icon-EDS_icon-07 slick-prev"></button>'
        });
    }



    $('.accord-open').on('click', function() {
        $( this ).toggleClass('icon-EDS_icon-09').toggleClass('icon-EDS_icon-06');
        $( this ).parent().next('.accord-block').slideToggle();
    });

//    read more description button

    if($(window).width() < 520) {
        var startText = $( ".description-text" ).text();
        var shortText = startText.slice(0, 200) + '...';
    } else {
        var startText = $( ".description-text" ).text();
        var shortText = startText.slice(0, 500) + '...';
    };

    $( ".description-text" ).text(shortText);


    $( '.read-more' ).on('click', function(){
        var btnText = $( this ).text();
        if ( btnText ==  "hide") {
            $( ".description-text" ).text(shortText);
        } else {
            $( ".description-text" ).text(startText);
        };
        $( this ).text(function(i, text){
            return text === "read more" ? "hide" : "read more";
        });
    });


    $('.like-button').on('click', function(e){
        e.preventDefault();
        $( this ).toggleClass('active');
    });



// HOME PAGE SLIDER
//     $('#slides').superslides();
    $('.laptop-slick-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $(".laptop-prev"),
        nextArrow: $(".laptop-next")
    });

    $('.mobile-slick-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $(".mobile-prev"),
        nextArrow: $(".mobile-next")
    });



//  SHOW REGISTRATION BLOCK
    $('.acc-name').on('click', function(){
        $('.wrapper').fadeToggle( "fast", "linear" );
        $('.registration-block').css("display", "flex")
            .hide()
            .fadeIn();
    });

//    Open subcategory elements
    $("#openElements").on('click', function(){
        $('.subcategory-hidden').css("display", "flex");
        $( this ).parent().hide();
    })



//    CLOSE REGISTRATION BLOCK
    $('.close-block').on('click', function(){
        $('.registration-block').fadeToggle( "fast", "linear" );
        $('.wrapper').fadeToggle( "slow", "linear" );
    });


    $('#design_studio').change(function() {
        if(this.checked) {
            $('.bottom-form').show();
        } else {
            $('.bottom-form').hide();
        }
    });

//    change select arrow

    var $eventSelect = $("#company_type");
    $eventSelect.select2();

    $eventSelect.on("select2:open", function () {
        $('select').siblings('.arrow').toggleClass("icon-EDS_icon-06").toggleClass("icon-EDS_icon-09");
    });
    $eventSelect.on("select2:close", function () {
        $('select').siblings('.arrow').toggleClass("icon-EDS_icon-09").toggleClass("icon-EDS_icon-06");
    });


   // project page main carousel

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<button type="button" class="icon-EDS_icon-08 slick-prev"></button>',
        nextArrow: '<button type="button" class="icon-EDS_icon-07 slick-next"></button>'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true
    });

    $(window).on('resize orientationchange', function() {
        $('.slider-nav').slick('setPosition');
    });


    $('.accordion-title').on('click', function() {
        $( this ).children().toggleClass('icon-EDS_icon-09').toggleClass('icon-EDS_icon-06');
        $( this ).next('.overview').slideToggle();
    })




    $('.sidebar-slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: $(".slider-prev"),
        nextArrow: $(".slider-next")
    });
    $('.sidebar-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: $(".slider-prev2"),
        nextArrow: $(".slider-next2")
    });



    var $eventProfessions = $("#professions");
    $eventProfessions.select2();

    $eventProfessions.on("select2:open", function () {
        $('select').siblings('.arrow').toggleClass("icon-EDS_icon-06").toggleClass("icon-EDS_icon-09");
    });
    $eventProfessions.on("select2:close", function () {
        $('select').siblings('.arrow').toggleClass("icon-EDS_icon-09").toggleClass("icon-EDS_icon-06");
    });

//  show popup form
    if($(window).width() > 768) {
        $('#showPopup').on('click', function(e) {
            e.preventDefault();
            $('.popup').css("display", "flex")
                .hide()
                .fadeIn();
        });
    };

    $('.popup').on('click', function(e) {
        if (e.target.className === "popup" || e.target.className === "close-popup icon-EDS_icon-10") {
            $('.popup').fadeOut();
        }
    })


//    Account pages scripts
    function editSettings() {
        $(".settings-wrapper").toggle();
        $(".edit-settings-wrapper").toggle();
    }
    $(".change-block").on("click", editSettings);



    function readURL(input) {
        var previewImg = $(input).next('.preview');
        var wrapper = $(input).closest('.photo-wrapper');
        var parent = $(input).closest('.add-photo-element');

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                previewImg.attr('src', e.target.result);
                previewImg.show();
                wrapper.css('text-align', 'left');
                if (parent.hasClass('profile-picture')) {
                    parent.css('max-width', '530px');
                    previewImg.css('max-width', '320px');
                    wrapper.css('width', '60%');
                }
                $(input).next().next().html('CHANGE PHOTO').addClass('change-photo');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-loader").change(function() {
        readURL(this);
    })

});
