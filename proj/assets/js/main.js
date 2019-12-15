$(document).ready(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {

            var target = $(this.hash);

            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }

        });
    });
    $('.loading').click(function(e) {
        e.preventDefault();
        setTimeout(function() { window.location = './selecionar.html'; }, 3000);

    });
});