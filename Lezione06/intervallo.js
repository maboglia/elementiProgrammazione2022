var i = 0;
const BINARIO = document.getElementById('binario')
const IMG = document.getElementById('img')


var movimento = setInterval(
    temporizzata, 100);

function temporizzata() {
    i += 5;
    IMG.style.left = i + 'px';
    console.log(IMG.style.left);
    if (IMG.style.left == '600px') {
        clearInterval(movimento)
    }

    //console.log('prova' + i++);
}