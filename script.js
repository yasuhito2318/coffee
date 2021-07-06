$(function(){
    $('.menu-btn').click(function () {
        $('body, html').animate({ scrollTop: $('#menu').offset().top }, 500);
    });

    $('.about-btn').click(function () {
        $('body, html').animate({ scrollTop: $('#about').offset().top }, 500);
    });

    $('.location-btn').click(function () {
        $('body, html').animate({ scrollTop: $('#location').offset().top }, 500);
    });
});
