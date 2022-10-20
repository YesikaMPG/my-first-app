// console.log('hola mundo esto es react')

//DESESTRUCTURACION DE OBJETOS: es partir o desglosar un objeto para utilizar variables mas simples 
//dentro del codigo que se esta utilizando en el aplicativo, se debe hacer con los mismos nombres de 
//las propiedades que tiene el objeto

const persona = {
    id: 123,
    nombre: 'Droopy',
    apellido: 'El perro',
    ubicacion : {
        lat: 6.321,
        long: 9.874
    }
}

console.log(persona);//imprime mensaje en consola

//llamar el objeto completo:
console.log(persona.id);
console.log(persona.nombre);
console.log(persona.apellido);

//aplicando desestructuracion al objeto persona:

//DESESTRUCTURING COMPLETO DEL OBJETO:

// const { id, nombre, apellido } = persona; 

// linea de javascrip: del objeto persona extrae el id y el valor del id en persona y se lo asigna al objeto 
//(los nombres se pueden cambiar si hay dos objetos con las mismas propiedades colocando asi id: id01 , nombre : nombre01 etc)

// console.log( id );
// console.log( nombre );
// console.log( apellido );

//DESESTRUCTURING INDIVIDUAL

//no es necesario que siempre desestructuremos todo el objeto, podemos usar una sola propiedad del objeto para desestructurar

// const {nombre , id } = persona; 

//no importa el orden en que se coloque la desestructuracion

// console.log( `Desestructuracion de la propiedad nombre: ${nombre}` );
// console.log( `Desestructuracion de la propiedad id: ${id}` );

//DESESTRUCTURING CUANDO SE RECIBE UN OBJETO COMO PARAMETRO

function mostrarDatosDePersona ( persona ) {
    console.log( persona.nombre);
    console.log( persona.apellido);
    console.log( persona.id);
    console.log( persona.ubicacion);

}

mostrarDatosDePersona ( persona )



