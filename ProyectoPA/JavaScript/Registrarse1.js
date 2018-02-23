(function ValidarCampos () {
    $('form').submit(function (event) {
        var mensajetexto = "";
        var mensajecedula="";
        $('.validatetext').each(function () {
            if ($(this).val().trim().length < 3) {
                var label = $('label', this.parentElement).text();
                mensajetexto += "\n"+label.substring(0, label.length - 1);
            }
        });
        $('.validatecedula').each(function () {
            if ($(this).val().trim().length < 9) {
                var label = $('label', this.parentElement).text();
                mensajecedula += "\n"+label.substring(0, label.length - 1);
            }
        });



        if (mensajetexto != "" || mensajecedula ) {
            alert("Los siguiente campos tienen menos de 5 characteres:\n"+mensaje);
            event.preventDefault(event);
        }
    });
})();
