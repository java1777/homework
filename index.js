// Task 1

// function sortDrinkByPrice(drink) {
//   return drinks.sort((a, b) => a.price - b.price);
// }

// const drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ];

// console.log(sortDrinkByPrice(drinks));

// Task 2

// function objectToArray(obj) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3 
// }));

// console.log(objectToArray({
//   likes: 2,
//   dislakes: 3,
//   followers: 10
// }));

// Task 3

// let names = [];

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ];

// for(let { name } of users) {
//   names.push(name);
// }

// console.log(names);

// Task 4

// function afterNYears(people, n) {
//   let result = {};
//   let yearsToAdd = Math.abs(n);

//   for (let person in people) {
//     result[person] = people[person] + yearsToAdd;
//   }

//   return result;
// }

// console.log(afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1));

// console.log(afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19));

// console.log(afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5));
