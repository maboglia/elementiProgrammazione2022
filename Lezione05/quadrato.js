function Quadrato(lato, colore) {
    this.lato = lato;
    if (colore === undefined)
        this.colore = 'black';
    else 
        this.colore = colore;
    this.area = function(){
        return (this.lato * this.lato);
    }

    this.disegna = function(){
        const DIV = document.createElement('div')
        DIV.style.width = this.lato * 10 + 'px'
        DIV.style.height = this.lato * 10 + 'px'
        DIV.style.border = '1px solid blue'
        DIV.style.backgroundColor = this.colore
        DIV.onclick = function () {
            console.log("mi hai cliccato, sono un div");
            DIV.style.backgroundColor = 'lime'
        }
        DIV.ondblclick = function () {
            console.log("mi hai dblcliccato, sono un div");
            console.log(colore);
            DIV.style.backgroundColor = colore
        }
        document.body.appendChild(DIV)
    }
}
