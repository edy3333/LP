function Pessoa(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Pessoa.prototype.introduce = function() {
    console.log(`oi eu sou ${this.name}, e eu tenho ${this.age} anos.`);
  };
  
  Pessoa.prototype.haveBirthday = function() {
    this.age++;
    console.log(`${this.name} eu vou fazer  ${this.age}!`);
  };
  
  Pessoa.prototype.changeName = function(newName) {
    this.name = newName;
    console.log(`${this.name} é esse meu nome.`);
  };
  
  // Criando e testando objetos Person
  let person1 = new Pessoa("Prof: Paulo", 75);
  person1.introduce();
  person1.haveBirthday();
  person1.changeName("Paulo Frazão");
  person1.introduce();
  
  let person2 = new Pessoa("Edilene", 27);
  person2.introduce();
  person2.haveBirthday();
  person2.haveBirthday();
  person2.introduce();