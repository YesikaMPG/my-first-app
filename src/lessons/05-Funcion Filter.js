import users from "./data/users";

//FUNCION FILTER

const getElementByMarca = (marca) => users.filter ( (item) => item.marca === marca); // sirve para filtrar varios elementos que coincidan

console.log(" ");
console.log( getElementByMarca ("a"));
console.log(" ");
