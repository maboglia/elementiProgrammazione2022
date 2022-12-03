
function fattoriale(n) {
    if (n == 0)
        return 1;
    else
        return n * fattoriale(n - 1);
        
}


console.log(fattoriale(10))
