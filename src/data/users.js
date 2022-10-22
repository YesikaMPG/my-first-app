//arrays de objetos, comienza desde la posicion cero, en laposicion cero hay un objeto con propiedades id, nombre, etc
// cuando la exportacion es por defecto se esxribe export default

const users = [ //exportacion individual
    { id: 1, nombre: "Gatito", apellido: "Feliz" , marca: "a" }, // estructura 1
    {
        id: 2,
        nombre: "Perro",
        apellido: "Enojado",
        marca: "a"
    }, //estructura 2
    { id: 3, nombre: "Loro", apellido: "Alegre" , marca: "b" },
    { id: 4, nombre: "Serpiente", apellido: "Coqueta" , marca: "b" },
    { id: 5, nombre: "Osito", apellido: "Dormilon" , marca: "c" }
];

export const numero = 48; // individual

export default users; // por defecto

export function saludo( nombre ) {
    console.log(`hola grupo 48, bienvenido sr ${ nombre } `);
}

// OTRA MANERA DE HACER LA EXPORTACIONES EN JAVASCRIPT 
//export {
//     users as default,
//     numero,
//     saludo
// }

//FUNCION COMPLETA PARA NOMBRE
export const getElementByName = function (nombre) {
    return users.find( function (item) {
        return item.nombre === nombre;
    });
};

//FUNCION TIPO FLECHA PARA NOMBRE
export const getElementByName2 = (nombre) => users.find ( (item) => item.nombre === nombre);

export const getElementByMarca = (marca) => users.filter ( (item) => item.marca === marca); // sirve para filtrar varios elementos que coincidan

console.log(" ");
console.log ("El nombre que corresponde a la funcion completa es: ");
console.log(getElementByName ("Gatito"));
console.log(" ");
console.log ("El nombre que corresponde a la funcion tipo flecha es: ");
console.log(getElementByName2 ("Serpiente"));
console.log(" ");
console.log( getElementByMarca ("a"));