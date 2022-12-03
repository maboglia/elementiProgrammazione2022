
// const luoghi = [];
var contatore = 0;
const BTN_UP = document.getElementById('btnFwd');
const BTN_DOWN = document.getElementById('btnBack');
const FOTO = document.getElementById('fotoCopertina');
const TESTO = document.getElementById('testo');

// const luogo1 = {foto: 'img/mole_antonelliana.jpg' , title: 'Mole Antonelliana'};
// const luogo2 = {foto : 'img/P.zaCarignanoo.jpg' , title: 'Piazza Carignao'};
// const luogo3 = {foto: 'img/Piazza_castello.jpg', title: 'Piazza Castello'};
// const luogo4 = {foto: 'img/piazza_san_carlo.jpg' , title: 'Piazza San Carlo'};
// const luogo5 = {foto: 'img/Piazza_vittorio.jpg' , title: 'Piazza Vittorio'};
// luoghi.push(luogo1);
// luoghi.push(luogo2);
// luoghi.push(luogo3);
// luoghi.push(luogo4);
// luoghi.push(luogo5);

BTN_DOWN.onclick = counterDown
BTN_UP.onclick = counterUp

function display(){
    console.log(contatore);
    console.log(FOTO);
    FOTO.src = luoghi[contatore].foto;
    TESTO.textContent = luoghi[contatore].title;
}


for (const luogo of luoghi) {
    console.log(luogo);

}



function counterUp(){
    contatore++;
    if(contatore > luoghi.length - 1){
        contatore = 0;
    }
    display();
}

function counterDown(){
    contatore--;
    if(contatore < 0){
        contatore = luoghi.length-1;
    }
    display();
}











// function isLandscape(a,b){
//     return a>b;
// }

// let prova  = isLandscape(800,600);
// console.log(prova);