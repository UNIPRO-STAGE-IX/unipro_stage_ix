$(document).ready(function () {
    let lastScrollTop = 10;
    $(window).scroll(function () {
        const currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            $(".navbar").addClass("navbar-hide");
        } else {
            $(".navbar").removeClass("navbar-hide");
        }
        lastScrollTop = currentScrollTop;
    });
});