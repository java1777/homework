// Misol - 1

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// Car.prototype.getInfo = function() {
//   return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
// };


// const car1 = new Car("Toyota", "Camry", 2020);
// const car2 = new Car("BMW", "X6", 2021);
// const car3 = new Car("Nexia", "Dons", 1997);
// const car4 = new Car("Maskvich", "GTR", 1990);
// const car5 = new Car("Zaparoj", "Pat-pat", 1987);


// console.log(car1.getInfo());
// console.log(car2.getInfo());
// console.log(car3.getInfo());
// console.log(car4.getInfo());
// console.log(car5.getInfo());



// Misol - 2

// const Animal = {
//   makeSound: function() {
//     console.log("Some sound");
//   }
// };

// const Dog = {
//   bark: function() {
//     console.log("Woof!");
//   }
// };

// Dog.__proto__ = Animal;

// Dog.makeSound();
// Dog.bark();

// Misol - 3

// Array.prototype.sum = function() {
//   return this.reduce((acc, val) => acc + val, 0);
// };

// let number = [1, 2, 3, 4, 5];
// console.log(number.sum());

// Misol - 4

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log("Hello, my name is " + this.name);
// };

// function Employee(name, position) {
//   Person.call(this,name);
//   this.position = position;
// }

// Employee.prototype.__proto__ = Person.prototype;

// let emp = new Employee("Javohir", "Developer");
// emp.greet();

// Misol = 5

// const Car = {
//   brand: "Rolls-Royce",
//   speed: 100,
//   drive: function() {
//     console.log(this.brand + " is driving at " + this.speed + " km/h");
//   }
// };

// const sportsCar = Object.create(Car);

// sportsCar.brand = "BMW";
// sportsCar.speed = 200;

// sportsCar.drive();
