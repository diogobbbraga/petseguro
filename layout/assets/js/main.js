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
    $('.maismenos').click(function(e) {
        e.preventDefault();
        var valor = $(this).html();
        if (valor == "Ver mais") {
            $(this).html('Ver menos');
        } else {
            $(this).html('Ver mais');
        }

    });
});