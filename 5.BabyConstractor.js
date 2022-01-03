"use strict";
function BabyConstractor(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
let Baby = new BabyConstractor("Sofia", 2, "Teddy Bear");
BabyConstractor.prototype.eat = function (...someFood) {
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
BabyConstractor.prototype.poop = function () {
  this.stomach = [];
  return this.stomach;
};
BabyConstractor.prototype.toString = function () {
  return `name | ${this.name}, age | ${this.age}`;
};
BabyConstractor.prototype.play = function (toy) {
  return `Playing with ${toy}`;
};















personConnstructor function(a, b){
  this.a = a;
  this.b = b;
}

babyConstructor function(a, b) {
  
}

babyConstructor.prototype.__proto__ = personConnstructor;





console.log(Baby.toString());
console.log(Baby.play(Baby.favoriteToy));
