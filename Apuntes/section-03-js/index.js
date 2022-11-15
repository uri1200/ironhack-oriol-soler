// console.log("pipo");
// console.log(document);
// console.table([
//     "Bad Bunny" , 7, "J Balvin", false, "Ozuna", undefined,
// ])

// const me = {name:"Oriol", lastname:"Soler", citiesLivedIn:["Barcelona" , "Esplugues de Llobregat"], age: 23, dob: 1998, drinkAlcohol: true };
// console.log(me);


// const books =   [{bookName:"Jojo's Bizzare Adventure", genre:"Comedy", author:"Araki", year: 1998, ISBN: '312312312JJFSDJS' },
// {bookName:"Blood and fire", genre:"Fantasy", author:"George R.R Martin", year: 2018, ISBN: 'KHLNSDA312312J' },
// {bookName:"Todo Arde", genre:"Thriller", author:"Juan Gomez Jurado", year: 2022, ISBN: '78439204HDSAJ' }]
// console.log(books);


// lexicoGraphicOrder (hacker1,hacker2);

// hobbie = "Me gusta jugar a videojuegos";
// console.log( "Hola mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años y " + hobbie);
// hobbie = "Me gusta la impresion 3d";
// console.log( "Hola mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años y " + hobbie);
// hobbie = "Me gusta la electronica";
// console.log( "Hola mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años y " + hobbie);
// hobbie = "Me gusta hacer kick boxing";
// console.log( "Hola mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años y " + hobbie);
// hobbie = "Me gusta comer";
// console.log( "Hola mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años y " + hobbie);

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.


// const name = "Diego"
// const age = "23"
// const livesIn = {
//     livesInTown: false,
//     livesInCity: false,
// }

// console.log(function1 (name, age, livesIn))
// function function1(name, age, livesIn) {

//     if (livesIn.livesInCity && livesIn.livesInTown)
//         return `${name} tiene ${age} años y vive en la ciudad y tiene un pisito en el pueblo`
//     else if (livesIn.livesInTown)
//         return `${name} tiene ${age} años y vive en el pueblo`;
//     else if (livesIn.livesInCity)
//         return `${name} tiene ${age} años y vive en la ciudad`;
//     else
//         return `${name} tiene ${age} años y vive en la calle`;
// }




const arr62 = [1, 2, 3, 4, 5, 1, 0, 7]
const veintiseis = 26;
const sesentaydos = 62;
function pushunshift (array, numeroprincipio, numerofinal) {

  array.push(numerofinal);
  array.unshift(numeroprincipio);

  return array;
}


const suma = (a, b) => {
    return a+b;
}
const suma2 = (a, b) => a+b;  
const luzencendida = (bombilla) => bombilla ? 'bombilla encendida':'bombilla apagada'
