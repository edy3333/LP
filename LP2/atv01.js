function Car(Toyota, Corolla, ano) {
    this.Toyota = Toyota;
    this.Corolla = Corolla;
    this.ano = ano;
    this.details = function() {
    console.log(`Branco: ${this.Toyota}, vermelho: ${this.Corolla}, ano:
   ${this.ano}`);
    };
   }
   //* Teste o construtor
   let myCar = new Car("Toyota", "Corolla", 2024);
   myCar.details(); // Saída: Brand: Toyota, Model: Corolla, Year: 2021

   
   