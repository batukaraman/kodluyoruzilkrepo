    $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#top").css("visibility","visible");
        } else {
            $("#top").css("visibility","hidden");
        }
    });

    $("#top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});