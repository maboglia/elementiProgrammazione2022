const INPUT = document.getElementById('cosa');
const BTN = document.getElementById('btnAdd');
const LISTA = document.getElementById('lista');

BTN.onclick = function () {
    
    let cosaDaAggiungere = INPUT.value;

    INPUT.value = ''

    const LI = document.createElement('li')
    LI.textContent = cosaDaAggiungere

    LI.onclick = function () {
        console.log('mi hai cliccato');
    }

    LISTA.appendChild(LI)


}

