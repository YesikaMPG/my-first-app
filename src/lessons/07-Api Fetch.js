//capturando desde una url de la web
function getFileJson(){
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then( (res) => res.json() ) //convierte a frmato tipo objeto siendo a su vez una promesa
    .then( (data) => console.log(data));
}

getFileJson();

// const resultado = getFileJson();
// console.log(resultado)


//capturando desde el mismo proyecto
function getFileJson2(){
    const url = "./data/users.json"
    fetch(url)
    .then( (res) => res.json() ) //convierte a frmato tipo objeto siendo a su vez una promesa
    .then( (data) => console.log(data));
}

getFileJson2();

