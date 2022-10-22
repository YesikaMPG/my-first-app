//estructura de una importacion de un archivo indivial se encierra entre llaves, si es por default va sin llaves
import users , { numero , saludo , getElementByName , getElementByName2 } from "./data/users"; 
//import users from "./data/users"; // si se fuera a importar por defecto unicamente
//import { numero , saludo } from "./data/users"; // si se fuera a importar cada elemento de forma individual

console.log ( users );
console.log ( numero );
saludo();

//desestructurar al array users

const [user01 , user02, user03, user04, user05, user06 ] = users
console.log(user06);
console.log(user05.id);
console.log(user01.nombre);
console.log(user03.id);
saludo(user02.nombre);




//desestructurar al user03
//si se desestructura un array son corchetes , si se desestructura un objeto son llaves

// const { id , nombre , apellido } = user03
// console.log(id);
// console.log(nombre);
// console.log(apellido)

// saludo( nombre );

//desestructurar al user04 y llamar a la funcion saludo con el parametro nombre
const { id , nombre , apellido } = user04
console.log(id);
console.log(nombre);
console.log(apellido)

saludo( nombre );

const result = saludo(); // se asigna la funcion a una variable para continuar usando la variable
console.log (result); // se imprime la variable


console.log(" ");
console.log ("El nombre que corresponde a la funcion completa es: ");
console.log(getElementByName ("Gatito"));
console.log(" ");
console.log ("El nombre que corresponde a la funcion tipo flecha es: ");
console.log(getElementByName2 ("Serpiente"));
console.log(" ");

const nombreAnimal = getElementByName ("Gatito");
const nombreAnimal2 = getElementByName2 ("Serpiente");

console.log (nombreAnimal);
console.log (nombreAnimal2);