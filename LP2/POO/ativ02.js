class veiculo {
    constructor(brand ,ano){
        this.brand = brand;
        this.ano = ano;
    }
    start(){
        console.log("O Veiculo esta começando agora.");
    }
}
class eletricCarro extends carro {
    constructor(brand ,ano , modelo, bateria){
       super(brand,ano,modelo)
       this.bateria = bateria;
    }
    start(){
        console.log("100Ah sua capacidade de bateria");
    }
}

class carro extends veiculo {
    constructor(brand , ano,modelo){
        super(brand,ano)
        this.modelo = modelo;
    }
    start(){
        console.log(`o carro ${this.modelo} da marca ${this.brand} está começando e ${bateria}`);
    }
}

const myCarro = new carro ("Toyota " ,2024 , "corolla")

myCarro.start()