//las promesas se usan para conectar las api del front al back
// const myPromise = new Promise ( ( resolve, rejectd ) => {
//     let control = false;

//     if (control){
//         resolve();
//     }else{
//         rejectd();
//     }
// })

// myPromise
// .then( () => console.log('Promesa resuelta'))
// .catch( () => console.log('Promesa rechazada'))

//las promesas se usan para conectar las api del front al back
const myPromise = new Promise((resolve, rejectd) => {
    let control = true;
  
    if (control) {
      resolve("Promesa resuelta");
    } else {
      rejectd("Promesa rechazada");
    }
  });
  
  //esta es la sintaxis mas usada con las promesas
  myPromise
    .then((res) => console.log(res)) //response
    .catch((err) => console.log(err)); //error
  
  
  // ejemplo sencillo que captura del resolve y el reject
  // myPromise
  //   .then(() => console.log("Promesa resuelta"))
  //   .catch(() => console.log("Promesa rechazada"));
  