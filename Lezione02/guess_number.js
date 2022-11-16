const NUMERO_SEGRETO =  parseInt(1 + Math.random() * 100 ); 
//console.log(NUMERO_SEGRETO);
var contatore = 0;
let NUMERO_UTENTE = document.getElementById('numero');
let RESULT = document.getElementById('result');//div id=result
let GIOCATE = document.getElementById('partite');//div id=result

// console.log(location.href);

NUMERO_UTENTE.value = 50;

console.log(NUMERO_UTENTE)

let msg = "Indovina numero"



function gioca(){
    
    contatore++;
    
    console.log(contatore);

    GIOCATE.innerHTML = "<h3>Hai giocato " + contatore + " volte</h3>";

    let numeroUtente = NUMERO_UTENTE.value;//prompt(msg)


    if (numeroUtente > NUMERO_SEGRETO){
        RESULT.innerHTML = "<h1>troppo grande</h1>";
    
    } else if (numeroUtente < NUMERO_SEGRETO){
        RESULT.innerHTML = "<h2>troppo piccolo</h2>";
    
    } else {
        RESULT.innerHTML = "<h1 class='win'>HAI INDOVINATO</h1>";
    
    }


}






