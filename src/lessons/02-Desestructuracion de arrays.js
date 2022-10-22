// DESESTRUCTURACION DE ARREGLOS (ARRAYS)
const nombresDeEstudiantes = ['Diego' , 'mileyvi ' , 'Juan']
console.log(nombresDeEstudiantes);

//DESESTRUCTURACION DE UN SOLO ELEMENTO Y CREANDO UN NUEVO ARRAY CON EL OPERADOR SPREAD 
//( SPREAD ES EL QUE SE COLOCAN LOS 3 PUNTICOS ... ANTES DE LA VARIABLE)
const [ p01 , ...restoDeEstudiantes ] = nombresDeEstudiantes ;
console.log (p01);
console.log ( restoDeEstudiantes );



//DESESTRUCTURACION DE UN SOLO ELEMENTO
const [ , p02 , ] = nombresDeEstudiantes; //se dejan los espacios de las posiciones que no se van a usar
console.log(p02);

//DESESTRUCTURACION DE TODO EL VECTOR
//el nombre de las variables a desestructurar puede ser cualquiera, el orden debe ser el mismo que el de los elementos de array
// const [v1 , v2 , v3 ] = nombresDeEstudiantes ;
// console.log(v1);
// console.log(v2);
// console.log(v3);