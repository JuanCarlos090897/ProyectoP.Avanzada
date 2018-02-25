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
        $('.validatecontrasena1').each(function () {

          if ($('#password').val() != $('#confirm_password').val()) {
          alert("no");
            }
        });

        if (mensajetexto != "" || mensajecedula !="" || mensajecontrasenas !=""|| mensajecontrasenas1 !="") {
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
          }  if (mensajecontrasenas1 != "") {
              msjcontrasenas="La constresñas no coinciden\n"
            }


            alert(msjtexto+mensajetexto+"\n"+"\n"+msjcedula+mensajecedula+"\n"+"\n"+msjcontrasenas+mensajecontrasenas+mensajecontrasenas);
            event.preventDefault(event);
        }

    });
})();


// -----------------------------------------------------------------
$(document).ready(function(){//para enviar al menu
    $('.btnRegresar').click(function(){
          window.location.href = "../HTML/Menu.html";
    });
});










// function ValidarContrasenas(){
//   $('form').submit(function (event) {
//     var $clave1 = document.contraseña1.value;
//     var $clave2 = document.contraseña2.value;
//     if ($clave1!=$clave2) {
//       alert("Las contraseñas no coninciden");
//       event.preventDefault(event);
//     }
//
//   }
//
// }







// (function comprobarcontrasenas(){
//   $("form").submit(function(event){
//     var $clave1 = document.contraseña1.value;
//     var $clave2 = document.contraseña2.value;
//     if ($clave1!=$clave2) {
//       alert("Las claves no son identicas");
//       event.preventDefault(event);
//       console.log("si entro y no son iguales");
//     }
//     console.log(" no entro porque son iguales");
//   });
// })();
