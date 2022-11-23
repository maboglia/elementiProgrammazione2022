const SIMBOLI = ['pietra', 'forbici', 'carta']
let partite = 0;
let vittorieUSER = 0;
let vittoriePC = 0;


for (const simbolo of SIMBOLI) {
    
    console.log(simbolo);

    const BTN = document.createElement('button')
    BTN.textContent = simbolo
    BTN.onclick = function (e){ 
        partite++;
        let sceltaUser = e.target.textContent; 
        let sceltaPC = scegliSimboloPC();

        let result = valuta(sceltaUser, sceltaPC);

        if (result == 'pc') vittoriePC++; 
        if (result == 'user') vittorieUSER++; 

        print(sceltaUser, sceltaPC)
        
    }
    document.body.appendChild(BTN)

}

function print(user, pc) {
    console.log("user " + user +", pc " + pc);
    console.log("partite " + partite)
    console.log("vittorie user " + vittorieUSER)
    console.log("vittorie PC "  + vittoriePC)
}

function scegliSimboloPC() {
    
    let random = Math.random();

    if (random < 0.3)
        return SIMBOLI[0];
    else if (random < 0.6)
        return SIMBOLI[1];
    return SIMBOLI[2];

}

function valuta(user, pc) {
    
    if (user == pc){
        return 'pareggio'
    }

    if (user == 'pietra'){
        return (pc == 'forbici') ? 'user' :  'pc' ;
    }
    if (user == 'forbici'){
        return (pc == 'carta') ? 'user' :  'pc' ;
    }
    if (user == 'carta'){
        return (pc == 'pietra') ? 'user' :  'pc' ;
    }

}