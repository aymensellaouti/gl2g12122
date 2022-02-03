
const promesse = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000)
    }
);

promesse.then(
    (data) => {
        console.log('recieved data from promesse ' + data);
    }
).catch(
    (erreur) => {
        console.log("raja3li floussi :(", error);
    }
)
