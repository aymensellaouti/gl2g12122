const chaine = 'bonjour';

var position = 0;
while ((pos = chaine.indexOf('o', position)) != -1) {
    console.log(pos);
    position = pos +1 ;
}
