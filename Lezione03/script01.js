const OUT = document.getElementById('output')
const BtnUp = document.getElementById('btnUp')
const BtnDown = document.getElementById('btnDown')

var counter = 0;

OUT.textContent = counter;

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

