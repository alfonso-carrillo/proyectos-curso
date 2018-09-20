document.addEventListener("mousedown",mousePresionado);
document.addEventListener("mouseup",mouseLevantado);
document.addEventListener("mousemove",mouseMovido);

var tecla = 0;
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
var colorson = "blue" ;

dibujarLinea("red", 0, 0, 300, 0, papel);
dibujarLinea("red", 300, 0, 300, 300, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("red", 0, 300, 0, 0, papel);


//dibujarLinea("red", x-1, y-1, x+1, y+1, papel);



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorson;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function mousePresionado(evento)
{
	tecla = 1;
	x = evento.offsetX;
	y = evento.offsetY;
}

function mouseLevantado(evento)
{
	tecla = 0;
	x = evento.offsetX;
  	y = evento.offsetY;
}

function mouseMovido(evento)
{
	if (tecla == 1) 
	{
		dibujarLinea(colorson, x, y, evento.offsetX, evento.offsetY, papel);
	}

	x = evento.offsetX;
	y = evento.offsetY;
}
