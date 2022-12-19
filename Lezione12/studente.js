class Studente {
    static counter = 1;
    matricola;
    nome; 
    cognome;

    constructor(nome, cognome){
        this.matricola = Studente.counter++;
        this.nome = nome;
        this.cognome = cognome;
    }

    firma(){
        return this.nome + " " + this.cognome;
    }

    firmaInvertita(){
        return this.matricola + ') ' +  this.cognome.toUpperCase() + " " + this.nome;
    }



}
