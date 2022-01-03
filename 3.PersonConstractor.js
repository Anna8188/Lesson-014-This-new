"use strict";
function PersonConstractor(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
let person = new PersonConstractor("Marry", 50);
PersonConstractor.prototype.eat = function (...someFood) {
  for (let i = 0; i < someFood.length; i++) {
    if (typeof someFood[i] === "string") {
      this.stomach.push(someFood[i]);
    }
  }
  if (this.stomach.length > 10) {
    return `${this.name} is not hungry`;
  }
  return this.stomach;
};
PersonConstractor.prototype.poop = function () {
  this.stomach = [];
  return this.stomach;
};
PersonConstractor.prototype.toString = function () {
  return `name | ${this.name}, age | ${this.age}`;
};
// console.log(
//   person.eat(
//     "meat",
//     "cheese",
//     "cake",
//     12,
//     0,
//     "fish",
//     "milk",
//     "egg",
//     "soup",
//     "pasta",
//     1,
//     "toast",
//     "pizza",
//     "yoghurt"
//   )
// );
// console.log(person.poop());
// console.log(person.toString());
