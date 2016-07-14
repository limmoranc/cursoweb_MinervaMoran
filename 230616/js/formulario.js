var usuario = "li@gmail.com";
var contraseña ="hola"

$(document).on("ready",enviar);

function enviar(){
	$("#envio").on("click",login)
}

function login(){
	correo = $("#usuario").val();
	contra= $("#pass").val();

	if (correo==usuario&&contra==contraseña){
		//alert("INICIO CORRECTO");
		window.location.href = 'http://www.google.com';
	}else{
		alert("INCIO INCORRECTO");
	}
}

