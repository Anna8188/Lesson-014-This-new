"use strict";
function CarConstructor(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
let car = new CarConstructor("BMW", 0.1);

CarConstructor.prototype.fill = function (gallons) {
  this.tank = gallons;
  if (gallons > 100) {
    return "It is too much!";
  } else if (gallons === 100) {
    return "full ";
  } else {
    return `Tank | ${this.tank}`;
  }
};
CarConstructor.prototype.drive = function (distance) {
  if (this.tank <= 0) {
    return "This car can't drive!";
    this.tank = 0;
  }
  if (distance < 1) {
    return `Wrong distance number... please check it!`;
  }
  this.tank = this.tank - distance / this.milesPerGallon;
  this.odometer = this.odometer + distance;
  if (this.tank <= 0) {
    this.tank = 0;
  }
  return `I ran out of fuel at ${this.odometer} miles!`;
};
console.log(car.fill(50));
console.log(car.drive(20));
console.log(car.odometer);
console.log(car.drive(30));
console.log(car.odometer);
console.log(car.drive(30));
console.log(car.tank);
