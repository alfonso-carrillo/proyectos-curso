var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoBoton );

var d = document.getElementById("dibujote");
var ancho = d.width;
var hoja = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

	hoja.beginPath();
	hoja.strokeStyle = color;
	hoja.moveTo(xinicial, yinicial);
	hoja.lineTo(xfinal, yfinal);
	hoja.stroke();
	hoja.closePath();
}

function dibujoBoton()
{

var lineas_shidas = parseInt(texto.value);
var colorsote = "#183AF7"
var espacio = ancho / lineas_shidas;
var rest_ancho = ancho - 1;

for (var l= 0; l < lineas_shidas; l++) {
	
	var xi = espacio * l;
	var yf = espacio *(l * 1);
	dibujarLinea(colorsote , xi, 0, rest_ancho , yf);
}

dibujarLinea(colorsote, rest_ancho, 1, 1, 1);
dibujarLinea(colorsote, rest_ancho, rest_ancho, rest_ancho, 1);


}