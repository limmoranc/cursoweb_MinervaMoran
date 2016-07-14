var mesa="";
var personas="";
var notas="";
var platos="";
var monto=0;



$(document).on("ready",enviar);

	

function enviar(){
	$("#envio").on("click",llenaDatos)

}
	

function llenaDatos(){
	mesa = $("#mesa").val();
	personas = $("#nume").val();
	notas = $("#nota").val();
	
	if (document.getElementById("en1").checked){
  		monto+=parseInt(document.getElementById("en1").value);
  		platos="Ensalada 3 lechugas ";
	}else{
		monto=monto+0;
	}	
	if (document.getElementById("en2").checked){
  		monto+=parseInt(document.getElementById("en2").value);
  		platos=platos+"Florette ";
	}else{
		monto=monto+0;
	}
	if (document.getElementById("en3").checked){
  		monto+=parseInt(document.getElementById("en3").value);
  		platos=platos+"Light ";
	}else{
		monto=monto+0;
	}
	if (document.getElementById("en4").checked){
  		monto+=parseInt(document.getElementById("en4").value);
  		platos=platos+"Sopa marinera ";
	}else{
		monto=monto+0;
	}		
	if (document.getElementById("pf1").checked){
  		monto+=parseInt(document.getElementById("pf1").value);
  		platos=platos+"Lomo de la Casa ";
	}else{
		monto=monto+0;
	}
	if (document.getElementById("pf2").checked){
  		monto+=parseInt(document.getElementById("pf2").value);
  		platos=platos+"Suprema de pollo ";
	}else{
		monto=monto+0;
	}	
	if (document.getElementById("pf3").checked){
  		monto+=parseInt(document.getElementById("pf3").value);
  		platos=platos+"Mariscos ";
	}else{
		monto=monto+0;
	}
	if (document.getElementById("pf4").checked){
  		monto+=parseInt(document.getElementById("pf4").value);
  		platos=platos+"Antojitos ";
	}else{
		monto=monto+0;
	}	
	if (document.getElementById("po1").checked){
  		monto+=parseInt(document.getElementById("po1").value);
  		platos=platos+"Peras envinadas ";
	}else{
		monto=monto+0;
	}	
	if (document.getElementById("po2").checked){
  		monto+=parseInt(document.getElementById("po2").value);
  		platos=platos+"Rebanada de Cheesecake ";
	}else{
		monto=monto+0;
	}	
	if (document.getElementById("po3").checked){
  		monto+=parseInt(document.getElementById("po3").value);
  		platos=platos+"Platón de Confitería ";
	}else{
		monto=monto+0;
	}
	if (document.getElementById("po4").checked){
  		monto+=parseInt(document.getElementById("po4").value);
		platos=platos+"Pastel ";

	}else{
		monto=monto+0;
	}				
	console.log(monto);
	document.getElementById("nm").innerHTML= mesa;
	document.getElementById("np").innerHTML= personas;
	document.getElementById("nt").innerHTML= notas;
	document.getElementById("pl").innerHTML= platos;
	document.getElementById("mo").innerHTML= "$"+monto;


	/*platos = $("#comen").val();
	document.getElementById("pl").innerHTML= platos;
    monto = $("#monto").val();	
	document.getElementById("mo").innerHTML= monto;*/
}


