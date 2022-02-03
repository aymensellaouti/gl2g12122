let book = {
    "main title": "JavaScript",
    'sub-title': "The Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};

function showObject(objet) {
    for (cle in objet) {
        console.log(objet[cle]);
    }
}

showObject(book);

((message) => {
    console.log('From fonction auto executé ' + message);
})('cc');

function spreadExample(x, y, ...elements) {
    console.log([...elements, 4,5,6]);
}
spreadExample('aymen',{a:'name'},function (){
    console.log(cc)});
