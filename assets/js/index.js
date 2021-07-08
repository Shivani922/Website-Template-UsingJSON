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

//----------------owl-carowsel-----------

$(document).ready(function(){
    var html = '';
    var owl = $('.owl-carousel').owlCarousel({
        loop:true,
        smartSpeed: 100,
        autoplay: true,
        autoplaySpeed: 100,
        mouseDrag: false,
        margin:10,
        animateIn: 'slideInUp',
        animateOut: 'fadeOut',
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $.ajax({
        url: 'template.json',
        dataType: 'json',
        success: function(data) {

            for (let i = 0; i < data.results.length; i++) {
                let image = data.results[i].picture.large;
                owl.trigger ('add.owl.carousel', [jQuery('<div class="wrapper"><img src="'+image+'" class="user-image" alt=""> </div>')]);
            }
            owl.trigger('refresh.owl.carousel');
        }
    });

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
