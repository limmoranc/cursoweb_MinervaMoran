

$(document).on("ready", principal);
function principal(){
  $('#menu-galeria li img').on("click",mostrarImagen);
  	$('.tache').on("click",ocultarImagen);
	$('#generar-btn').on("click",generarInput);
	$('#chat-btn').on("click",chatear);

}
function mostrarImagen(){
	
	var nombre =$(this).attr('alt');
	

	var direccion='img/'+nombre+'_lg.jpg';

	$('#imagen-principal').attr('src',direccion);

  	$('.galeria-container').show();
}

function ocultarImagen(){
	$('.galeria-container').hide(1000);
}
function generarInput(){
	var tipo=$('#tipo-input').val();
	var nuevoElemento=$('<input type="'+tipo+'">');
	console.log(nuevoElemento);

	$('.well').append(nuevoElemento);
}
function chatear(){
	var reng=$('#renglon').val()+'<br>';
	console.log(reng);
	$('.chat').append(reng);

}