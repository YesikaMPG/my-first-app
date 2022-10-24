// ASYNC Y AWAIT
function resolveAfter2Seconds(){
    return new Promise ( ( resolve, reject ) => {
        setTimeout(() => {
            resolve("resuelto el resolve");
        }, 2000 );
    });
}

async function asyncCall() {
    console.log ('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();