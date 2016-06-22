/*console.log("Hola Javascript!");
document.write("<h1>Hola clase!</h1>"+"<hr>"+"Hola a todos");
*/

/*var n="Hola";

var x=8;
var y=2;

var z=3.5;

console.log(x+y);
console.log(z+y);
console.log(n+x);
console.log(n+z);*/
/*
Operadores
=   +   -   *  /  %   ++  --
                  módulo de una operacion residuo

operadores lógicos  
&&    ||   !=           ==      === 
and    or   diferente   igual    exactamente igual
*/

//document.write(1===true);  //asi lo imprime en la pagina principal

/*operandores relacionales
<   >   <=   >=
*/

/*num1=1;
num2=2;

resultado=num2>num1;
console.log(resultado); //asi lo muetra solo en la cosola
*/
/*Cuadros de texto más comunes*/
//es una alerta messagebox no espera respuestas
//alert("Hola otra vez");

//messagebox que espera respuesta
//confirm("¿Todo bien?");


//messagebox con aceptar cancelar y respuesta incluida
/*name=prompt("¿Cómo te llamas?");
console.log(name);*/

//Arreglos
/*var arreglo =[1,2,3,4];

console.log(arreglo);
console.log(arreglo[2]);
console.log(arreglo[0]);

arreglo2=[];

arreglo2.push(1);
arreglo2.push("hola");
//arreglo2.push(hola);
arreglo2.push(2.581);

console.log(arreglo2);
arreglo2.pop();
console.log(arreglo2);

tamanio= arreglo.length;
console.log(tamanio);

var arreglo3 =[222,444,111,333];
ordenado=arreglo3.sort();
console.log(ordenado);
*/

//Programacion funcional
/*function Sumar(a,b){
  return a+b;
}
function Resta(a,b){
  return a-b;
}
console.log(Sumar(6,7));
console.log(Resta(10,5));
*/

//Sentencias de control
//IF
/*
var edad = 80;
if(edad>=18){
   alert("Eres mayor de edad!");
}
else{
	alert("No eres mayor de edad!");
}*/


//ELSE IF
/*var edad=60;
if (edad<=18) {
	alert("Eres un niño.");
}else if(edad<=30){
	alert ("Eres adulto joven.")
}
else if(edad<60){
	alert("Eres adulto!");
}
else{
	alert("Estás grande!");
}*/

//for
/*var arreglo =[1,2,3,4];
for (i = 0; i < arreglo.length;i++){
	document.write(arreglo[i]);
}*/

//while
/*var arreglo =[1,2,3,4];
var i=0;
while(i<4){
	console.log(arreglo[i]);
	i++;
}
*/


//POO
function Persona(edad,nombre){
	this.edad=edad;  //la edad de la clase es la q pasa el argumento
	this.nombre=nombre;
	this.comer = function(){
		console.log("Estoy comiendo")
	}
}
//instanciar objeto
var persona1 = new Persona(38,"Minerva");

console.log("Hola me llamo:" +persona1.nombre);
console.log("Tengo estos años:" +persona1.edad);
//invocar un método
persona1.comer();