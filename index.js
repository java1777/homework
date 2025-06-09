// Masala 1


// class Student {
//   constructor(name, age, grade){
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }

// getInfo(){
//   return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//   }
// }

// const Student1 = new Student("Javohir", 27,97);

// console.log(Student1.getInfo());
// --------------------------------------------------------------------

// Masala 2


// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   getCarAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   }

//   isOldCar() {
//     return this.getCarAge() > 10 ? "Eski mashina" : "Yangi mashina";
//   }
// }

// const car1 = new Car("Chevrolet", "Nexia", 2012);

// console.log(`Mashina yoshi: ${car1.getCarAge()} yil`);
// console.log(car1.isOldCar());

// ------------------------------------------------------------------------------

// Masala 3

// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.#balance = 0;
//     this.balance = balance; // setter orqali o'rnatiladi
//   }

//   #balance;

//   get balance() {
//     return this.#balance;
//   }

//   set balance(value) {
//     if (value >= 0) {
//       this.#balance = value;
//     } else {
//       console.log("Balans manfiy bo'lishi mumkin emas!");
//     }
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`${amount} so'm qo‘shildi. Yangi balans: ${this.#balance} so'm`);
//     } else {
//       console.log("Faqat musbat miqdor kiritish mumkin.");
//     }
//   }

//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`${amount} so'm yechildi. Yangi balans: ${this.#balance} so'm`);
//     } else {
//       console.log("Yetarli mablag' yo'q");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount("Javohir", 500);

// console.log("Hisob egasi:", account.owner);
// console.log("Boshlang'ich balans:", account.balance);

// account.deposit(200);
// account.withdraw(100);

// console.log("Joriy balans:", account.getBalance());

// account.balance = -100;
// console.log("Umumiy balans:", account.balance);

// ---------------------------------------------------------------------------------

// Masala 4


// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} says: ${this.sound}`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name, "Woof!");
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name, "Meow!");
//   }
// }

// const myDog = new Dog("Bobik");
// const myCat = new Cat("Sariqvoy");

// myDog.makeSound();
// myCat.makeSound();

// ---------------------------------------------------------------------------------------------

// Masala 5


// class Technology {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }

//   getInfo() {
//     return `Brand: ${this.brand}, Price: ${this.price} USD`;
//   }
// }

// class Computer extends Technology {
//   constructor(brand, price, processor) {
//     super(brand, price);
//     this.processor = processor;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Processor: ${this.processor}`;
//   }
// }

// class Laptop extends Computer {
//   constructor(brand, price, processor, batteryLife) {
//     super(brand, price, processor);
//     this.batteryLife = batteryLife;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Battery Life: ${this.batteryLife} hours`;
//   }
// }

// const tech = new Technology("SpaceX", 300);
// console.log(tech.getInfo());

// const comp = new Computer("Nitro", 800, "Intel i9");
// console.log(comp.getInfo());

// const laptop = new Laptop("Apple", 1500, "M2", 12);
// console.log(laptop.getInfo());

// ----------------------------------------------------------------------------------------------------------

// Masala 6


// class Vehicle {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   move() {
//     console.log(`${this.name} harakatlanmoqda.`);
//   }
// }

// class Car extends Vehicle {
//   move() {
//     console.log(`${this.name} yo‘lda harakatlanmoqda.`);
//   }
// }

// class Boat extends Vehicle {
//   move() {
//     console.log(`${this.name} suvda harakatlanmoqda.`);
//   }
// }

// class Airplane extends Vehicle {
//   move() {
//     console.log(`${this.name} havoda uchmoqda.`);
//   }
// }

// const genericVehicle = new Vehicle("Transport", 50);
// genericVehicle.move();  

// const car = new Car("BMW", 120);
// car.move();  

// const boat = new Boat("Titanic", 40);
// boat.move();  

// const airplane = new Airplane("Boeing 747", 900);
// airplane.move();  

// -----------------------------------------------------------------------------------------

// Masala 7

// class Calculator {
//   divide(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Nolga bo‘lish mumkin emas");
//       }
//       return a / b;
//     } catch (error) {
//       return `Xatolik: ${error.message}`;
//     }
//   }

//   sqrt(n) {
//     try {
//       if (n < 0) {
//         throw new Error("Manfiy son ildizi mavjud emas");
//       }
//       return Math.sqrt(n);
//     } catch (error) {
//       return `Xatolik: ${error.message}`;
//     }
//   }
// }

// const calc = new Calculator();

// console.log(calc.divide(10, 2));
// console.log(calc.divide(10, 0));

// console.log(calc.sqrt(25));
// console.log(calc.sqrt(-9));
