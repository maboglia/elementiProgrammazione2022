const colori = ['red', 'green', 'blue', '#FFCC33']

const TENDINA = document.createElement('select')

for (const colore of colori) {
    const OPTION = document.createElement('option')
    OPTION.textContent = colore
    TENDINA.appendChild(OPTION)
    console.log(colore);
}

TENDINA.onchange = function(e){
    let index = TENDINA.options.selectedIndex;
    document.body.style.backgroundColor = colori[index]
}

document.body.appendChild(TENDINA)