class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log("O veículo está começando.");
  }
}

class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  start() {
    console.log(`O carro ${this.model} da marca ${this.brand} está começando.`);
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, year, batteryCapacity) {
    super(brand, year);
    this.batteryCapacity = batteryCapacity;
  }

  start() {
    console.log(`O carro elétrico da marca ${this.brand} está começando.`);
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, year, cc) {
    super(brand, year);
    this.cc = cc;
  }

  start() {
    console.log(`A motocicleta da marca ${this.brand} está começando.`);
  }
}

function startVehicle(vehicle) {
  vehicle.start();
}
const myCar = new Car("Toyota", 2023, "Corolla");
const myElectricCar = new ElectricCar("Tesla", 2022, 75);
const myMotorcycle = new Motorcycle("Harley Davidson", 2021, 1200);

startVehicle(myCar);
startVehicle(myElectricCar);
startVehicle(myMotorcycle);