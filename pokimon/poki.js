var imagenes = [];

imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pokimon("Cauchin",100, 30));
coleccion.push(new Pokimon("Pokacho",80, 50));
coleccion.push(new Pokimon("Tocinauro",120, 40));

for(var pokes of coleccion)
{
	pokes.mostrar();
}