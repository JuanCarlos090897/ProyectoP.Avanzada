(function ValidarCampos () {
    $('form').submit(function (event) {
        var mensajetexto = "";
        var mensajecedula="";
        var mensajecontrasenas="";
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
        $('.validatecontrasena').each(function () {
            if ($(this).val().trim().length < 7) {
                var label = $('label', this.parentElement).text();
                mensajecontrasenas += "\n"+label.substring(0, label.length - 1);
            }
        });


        if (mensajetexto != "" || mensajecedula !="" || mensajecontrasenas !="") {
          var msjtexto="";
          var msjcedula="";
          var msjcontrasenas="";

          if (mensajetexto != "") {
            msjtexto="Los siguiente campos tienen menos de 3 characteres:\n"
          }
          if (mensajecedula != "") {
            msjcedula="El siguiente campo de cedula debe de tener 9 digitos:\n"
          }
          if (mensajecontrasenas != "") {
            msjcontrasenas="Los siguientes campos de contraseñas deben de tener mas de 7 characteres:\n"
          }
          if (mensajecontrasenas != "") {
            msjcontrasenas="Los siguientes campos de contraseñas deben de tener mas de 7 characteres:\n"
          }

            alert(msjtexto+mensajetexto+"\n"+"\n"+msjcedula+mensajecedula+"\n"+"\n"+msjcontrasenas+mensajecontrasenas);
            event.preventDefault(event);
        }
        $('.validatecontrasena1').each(function () {

          if ($('.validatecontrasena1').val() != $('.validatecontrasena2').val()) {
          alert("Las contraseñas no son identicas");
          event.preventDefault(event);
            }
        });

    });
})();


// -----------------------------------------------------------------
$(document).ready(function(){//para enviar al menu
    $('.btnRegresar').click(function(){
          window.location.href = "../HTML/Menu.html";
    });
});

function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1)
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);

    //Retornar valor filtrado
    return out;
} 
