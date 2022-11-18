const OUT = document.getElementById('output')
const OUT_PARTITE = document.getElementById('partite')
const OUT_MEDIA = document.getElementById('media')

const BtnUp = document.getElementById('btnUp')
const BtnDown = document.getElementById('btnDown')
const BtnPlay = document.getElementById('btnPlay')

const IMG1 = document.getElementById('dado1')
const IMG2 = document.getElementById('dado2')

var counter = 0;
var partite = 0;
var media = 0.0;

OUT.textContent = counter;

BtnPlay.onclick = function () {
    
    partite++;//incremento il n di partite
    OUT_PARTITE.textContent = partite;

    
    
    let resDado1 = parseInt(1 + Math.random() * 6);
    let resDado2 = parseInt(1 + Math.random() * 6);
    
    
    IMG1.src = 'img/f' + resDado1 + '.jpg';
    IMG2.src = 'img/f' + resDado2 + '.jpg';
    
    if (resDado1 == resDado2){
        incrementa()
        display()
    }
    media = counter / partite;
    OUT_MEDIA.textContent = media

    
    console.log(IMG1);
    console.log(IMG2);
}

BtnUp.onclick = function (){
    incrementa();
    display();
}

BtnDown.onclick = function (){
    decrementa();
    display();
}

function incrementa() {
    counter++;
}

function decrementa() {
    counter--;
}

function display(){
    OUT.textContent = counter;
}

