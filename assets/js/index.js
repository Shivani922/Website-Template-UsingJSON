// -----------For background chnge color--------------------
/*
$(document).scroll(function() {
    var myScrollFunc = function () {
        var y = window.scrollY;

        if (y < 400) {
            $(".header-container").addClass("active");
        }
        else {
            $(".header-container").removeClass("show");
        }

    };
    window.addEventListener("scroll", myScrollFunc);
});
*/


$(window).scroll(function() {
    window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    if(!window.isMobile ) {
        if ($(this).scrollTop() > 90) {
            $('.header-container').addClass("active")
        } else {
            $('.header-container').removeClass("active")
        }
    }
});

//--------------for owl carousel----------------

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items:3,
            nav: false
        }
    }
});


//--------------Show Mobile Menu----------------
function Myfunction(){
    $("#show-mobile-menu").show();
    $(".crossbtn").addClass("show");
    $(".checkbtn").hide();

}
function hidemenu(){
    $("#show-mobile-menu").hide();
    $(".crossbtn").removeClass("show");
    $(".checkbtn").show();
}



