const quadrati = [];

const BOTTONE = document.getElementById('btnAdd')

BOTTONE.onclick = function () {
    const q = new Quadrato(10, '#FFCC99');
    q.disegna();
}

const DIVS = document.getElementsByTagName('div')
DIVS.onclick = function () {
    console.log('hai cliccato su div');
}


quadrati.push(new Quadrato(10, '#FFCC99'));
quadrati.push(new Quadrato(12, 'red'));
quadrati.push(new Quadrato(14));
quadrati.push(new Quadrato(16));

for (const q of quadrati) {
    console.log('il lato del quadrato è ' + q.lato);
    console.log('la superficie del quadrato è ' + q.area());
    //q.disegna()
    
}

const personaggi = [
    {nome : 'giuseppe', cognome: 'mazzini'},
    {nome : 'camillo', cognome: 'cavour'},
    {nome : 'giuseppe', cognome: 'garibaldi'}
]

const nomi = ['giuseppe', 'camillo', 'giuseppe'];
const cognomi = [ 'cavour','mazzini', 'garibaldi'];

for (let index = 0; index < nomi.length; index++) {
    console.log(nomi[index] + ' ' + cognomi[index]);
    
}


