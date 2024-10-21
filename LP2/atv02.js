class Carro {
    constructor(fusca, ano,) {
        this.fusca = fusca;
        this.ano = ano;
        this.Desligado;
 }
 details() {
 console.log(`${this.fusca} Azul , Ano de
${this.ano}`);
 }
 ligar() {
 console.log(`${this.fusca} ${this.ano}'está ligado!`);
 }
 Desligado() {
    console.log(`${this.fusca} ${this.ano}'está Desligado!`);
    }
}

if (true != false ) {
    console.log("o carro esta Desligado");
}else{
    console.log("esta ligado");
}

let meuCarro = new Carro("fusca",1959);
meuCarro.details(true); 

