var granj = document.getElementById("granjita");
document.addEventListener("keydown", sonicTeclado);
var context = granj.getContext("2d");

var xSonic = 150;
var ySonic = 150;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var sonic = {
  url: "sonic.gif",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};



var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

sonic.imagen = new Image();
sonic.imagen.src = sonic.url;
sonic.imagen.addEventListener("load", cargarSonic);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function sonicTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch (evento.keyCode)
 {
  case teclas.UP:
    ySonic = ySonic - movimiento;
    dibujar();
    break;

  case teclas.DOWN:
    ySonic = ySonic + movimiento;
    dibujar();
    break;

  case teclas.RIGHT:
    xSonic = xSonic + movimiento;
    dibujar();
    break;

  case teclas.LEFT:
    xSonic = xSonic - movimiento;
    dibujar();
    break;
  }
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarSonic()
{
  sonic.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    context.drawImage(fondo.imagen, 0, 0);
  }

  if(sonic.cargaOK)
  {
      context.drawImage(sonic.imagen, xSonic, ySonic);
  }

  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      context.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      context.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}