
var nbrIteration = 5;
const indice = setInterval(
    () => {
        if (!nbrIteration) {
            clearInterval(indice);
        } else {
            console.log(nbrIteration--);
        }
    },
    1500
);
