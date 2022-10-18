const listaCompra = ['Queso', 'Jamón', 'Tomátes', 'Patátas' ,'Azúcar' ,'Atún' ]
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);

let peliculas = [
    {titulo: "Interestellar", director: "Christopher Nolan", fecha: new Date(2014,10,6)},
    {titulo:"Luca",director: "Enrico Casarosa", año: new Date(2021, 05, 18)},
    {titulo: "Garra", director: "Jeremiah Zagar", año: new Date(2022, 05, 03)}, 
    {titulo: "The Game", director: "David Fincher", año: new Date(1997, 10, 20)}
]

const antes_2010 = peliculas.filter(antes => antes.año < new Date(2010,0,1))

console.log(antes_2010)

const soloDirectores = peliculas.map(direct => direct.director)

console.log(soloDirectores);

const titulosPeliculas = peliculas.map(titul => titul.titulo)

console.log(titulosPeliculas);

const tituloDirector = titulosPeliculas.concat(soloDirectores)

console.log(tituloDirector)

const tituloDIrector2 = [...titulosPeliculas, ...soloDirectores]

console.log(tituloDIrector2);
