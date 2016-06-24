/*$(document).ready(function(){
	$("p").click(function(){
		$(this).hide();
	});
});*/



//cargar un documento
//cuando cargue el documento ejecuta la funcion principal
$(document).on("ready",principal);
//acceder a las funciones
//console.log(  $('p').html()  );

//cuando se le de click al parrafo ejecuta la funcion bienvenida
/*function principal(){
	$('.titulo-principal').on("click",bienvenida);
}*/

//imprime en pantalla el mensaje en el contenedor-bienvenida
/*function bienvenida(){
  $('.contenedor-bienvenida').html("HOLA BIENVENIDO");
}

*/


function principal(){
	$('#enviar').on('click',validarSesion);
}

function validarSesion(){
var usuario= $('#nombreUsuario').val();
$('#contenedor').html('Bienvenido'+usuario);
}

