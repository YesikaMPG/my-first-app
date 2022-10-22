//las promesas se usan para conectar las api del front al back
const myPromise = new Promise ( ( resolve, rejectd ) => {
    let control = false;

    if (control){
        resolve();
    }else{
        rejectd();
    }
})

myPromise
.then( () => console.log('Promesa resuelta'))
.catch( () => console.log('Promesa rechazada'))