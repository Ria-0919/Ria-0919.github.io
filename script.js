$(document).ready(function() {
    $(".nav-link").click(function(e) {
        e.preventDefault();
        const section = $(this).data("section");
        $(".content").hide();
        $("#" + section).fadeIn();
    });
});
