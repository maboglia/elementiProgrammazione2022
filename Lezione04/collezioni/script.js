//                 0        1                                                         6
let giorni = [ 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'];//7

let bicicletta = {  marca: "atala", modello: "b27", "marce": 6 , "motore": "elettrico" }
let bicicletta2 = {  marca: "cannondale", modello: "super", "marce": 100  }

let biciclette = [ bicicletta, bicicletta2   ];



 for (const b of biciclette) {//scorro la collezione di obj
    
    const TITOLO = document.createElement('h2')
    TITOLO.textContent = 'Bicicletta'
    document.body.appendChild(TITOLO)

     for (const key in b) {//scorro le proprità dell'obj
         
        const PAR = document.createElement('p')

        PAR.textContent = key + ': ' + b[key]

        document.body.appendChild(PAR)
        console.log(key + ': ' + b[key]);
     }



 }







//console.log(bicicletta.marca);

// for (const chiave in bicicletta2) {
   
//    console.log(chiave + ': ' + bicicletta2[chiave]);
// }

// for (let i = 0; i < giorni.length; i++) {
//     const giorno = giorni[i];
//     console.log(giorno);
    
// }

// for (const giorno of giorni) {
//     console.log(giorno);
// }