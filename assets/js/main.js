$(document).ready(function () {
    $("#more").click(function() {
        $('html', 'body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

});