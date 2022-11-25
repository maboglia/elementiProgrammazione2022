function Quadrato(lato) {
    return {
        lato: lato,
        area(){return this.lato * this.lato}
    }
} 

let q1 = Quadrato(10)
let q2 = Quadrato(15)

console.log(q1.area());
console.log(q2.area());