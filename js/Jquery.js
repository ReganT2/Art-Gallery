$("document").ready(function($){
    var navBar = $('#nav-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            navBar.addClass("fixed-nav");
        } else {
            navBar.removeClass("fixed-nav");
        }
    });
});
