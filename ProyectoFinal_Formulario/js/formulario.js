$(document).on("ready",enviar);

function enviar(){
	$("#envio").on("click",llenaDatos)
}

function llenaDatos(){
	var nom="";
	var dia="";
	var com="";
	nom = $("#nombre").val();
	dia= $("#dia").val();
	com= $("#comen").val();
	if (nom==""){
		alert("Por favor llene el campo Nombre");
		//window.location.href='http://proteco.mx';
	}else if(com==""){
		alert("Por favor proporcione sus comentarios");
	}else{
		alert("Valoramos sus comentarios. Gracias!");
	}
}

