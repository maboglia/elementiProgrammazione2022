let studenti = [
    new Studente('paolo', 15),
    new Studente('kira', 18),
    new Studente('albert', 21),
    new Studente('ildiko', 24),
    new Studente('saba', 27),
];

var totale = 0;

for (const studente of studenti) {

    for (const chiave in studente) {
        if (studente.hasOwnProperty(chiave)) {
            const valore = studente[chiave]
            console.log(chiave + ': ' + valore);

        }
    }

    switch (studente.voto) {
        case 15:
        case 16:
        case 17:
            console.log('insufficiente');
            break;
        case 18:
        case 19:
        case 20:
            console.log('sufficiente');
            break;
        case 21:
        case 22:
        case 23:
            console.log('discreto');
            break;

        default:
            break;
    }


    //console.log(studente.nome);
    totale += studente.voto
}

console.log('Il totale dei voti è: ' + totale);