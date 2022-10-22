//FUNCION FIND: sirve para encontrar un elemento en un array y devuelve el primer valor de una posicion siempre
// y cuando cumpla con la condicion estipulada
import users from "./data/users"; 

console.log ( users );

// lo ideal de la funcion find es que se pueda ingresar un valor que permita buscarse

const resultado = users.find( function (item) {
    return item.id === 4 //si se busca por nombre va entre comillas
})

//FUNCION FIND CONVERTIDA A FLECHA
const resultado2 = users.find( (item) => {return item.nombre === 'Gatito'}) 

const resultado3 = function (id) {
    return users.find ( (item) => item.id === id)
}


console.log(resultado);
console.log(`el sr que corresponde al id ${resultado.id} es ${resultado.nombre} ${resultado.apellido}`);

console.log(resultado2);
console.log(`el sr que corresponde al id ${resultado2.id} es ${resultado2.nombre} ${resultado2.apellido}`);

console.log (resultado3 (2)); // yo puedo ejecutar y visualizarla por pantalla pero no voy a almacenar el resultado en ningun lado

const user = resultado3 (3); // primer opcion sin desestructuracion
console.log(`el sr que corresponde al id ${user.id} es ${user.nombre} ${user.apellido}`);//mostrando por consola sin desestructuracion primer opcion

const {nombre , apellido, id} = user; // segunda opcion con desestructuracion
console.log(`el sr que corresponde al id ${id} es ${nombre} ${apellido}`); //mostrando por consola con desestrcuturacion segunda opcion


