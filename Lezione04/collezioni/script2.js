const CARRELLO = [];
const DIV_CONTAINER = document.createElement('div')
const UL = document.createElement('ul')

DIV_CONTAINER.setAttribute('class', 'container')

const INPUT = document.createElement('input')
INPUT.setAttribute('type', 'text')
INPUT.setAttribute('placeholder', 'Scrivi cosa comprare')
DIV_CONTAINER.appendChild(INPUT)

const BUTTON = document.createElement('button')
BUTTON.textContent = "Add"
BUTTON.onclick = function (evento) {
    let cosaDaComprare = leggiInput();
    //console.log(cosaDaComprare);
    CARRELLO.push(cosaDaComprare)
    pulisci();
    listCart();
}
DIV_CONTAINER.appendChild(BUTTON)


function leggiInput() {//hoisting
    let valore = INPUT.value
    return valore;
}

function pulisci() {
    INPUT.value = ''
}

function listCart() {
    
    UL.innerHTML = ''

    for (const cosa of CARRELLO) {
        const LI = document.createElement('LI')
        LI.textContent = cosa
        UL.appendChild(LI)
        console.log(cosa);
    }
    document.body.appendChild(UL)
}

document.body.appendChild(DIV_CONTAINER)