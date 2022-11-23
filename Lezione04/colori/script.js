const colori = ['red', 'green', 'blue', '#FFCC33']

const TENDINA = document.createElement('select')
const INPUT = document.createElement('input')
INPUT.setAttribute('placeholder', "Aggiungi un colore")
const BTN = document.createElement('button')
BTN.textContent = "Add colore";
BTN.onclick = function () {
    colori.push(INPUT.value)
    coloraSfondo()
}


function coloraSfondo() {
    TENDINA.innerHTML = ''
    for (const colore of colori) {
        const OPTION = document.createElement('option')
        OPTION.textContent = colore
        TENDINA.appendChild(OPTION)
        console.log(colore);
    }
}

TENDINA.onchange = function(e){
    let index = TENDINA.options.selectedIndex;
    document.body.style.backgroundColor = colori[index]
}

document.body.appendChild(TENDINA)
document.body.appendChild(INPUT)
document.body.appendChild(BTN)