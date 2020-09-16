'use strict';

/*
  * EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
* 👇 COMPLETE YOUR WORK BELOW 👇
* 👇 COMPLETE YOUR WORK BELOW 👇
* 👇 COMPLETE YOUR WORK BELOW 👇
*/


/*
  * TASK 1
  * FINISHED
  >> Passes all tests
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        - When eating an edible, it should be pushed into the `stomach`.
        - The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
    return true;
  } else {
    return false;
  }
};
Person.prototype.poop = function() {
  while (this.stomach.length > 0) {
    this.stomach.pop();
  }
};
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};


/*
  * TASK 2
  * FINISHED
  * passes all tests
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function(distance) {
  const fuelUsed =  distance / this.milesPerGallon;
  if (this.tank >= fuelUsed) {
    this.tank = this.tank - fuelUsed;
    this.odometer += distance;
  } else {
    const distanceDriven = this.milesPerGallon * this.tank;
    this.tank = 0;
    this.odometer += distanceDriven;
    return `I ran out of fuel at ${this.odometer} miles!`;
    
  }
};



/*
  * TASK 3
  * FINISHED
  * passes all tests
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};

/* 
  * TASK 4
  * FINISHED

  ? In your own words explain the four principles for the "this" keyword below:

  1. In the global scope, the value of "this" refers to the base object —— either window or console, depending 
  on whether the developer is working in the browser environment or node environment. (window for browser, console for node)
  
  2. Implicit binding makes up for 80% of "this" keyword use cases. Whenever a function is invoked by way of the dot 
  operator, "this" keyword refers to the object prededing the dot. <object>.<method_name> —— the object is "this" and 
  the specified method is called by "this" object. 
  
  3. When the "new" keyword is utilized to invoke a constructor function, "this" refers to the new instance of the 
  freshly constructed  object. This probably makes up another 17% of the "this" keyword use cases. 

  4. Explicit binding of the "this" keyword is by far the most niche and confusing use case of said keyword. JS allows 
  developers to call call(), apply(), or bind() to explicitly and definitively bind a certain object ("this") to the keyword 
  in the context of a given function. The system will know that any time that function is called, it's referring to the "this" 
  that was explicitly bound in a previous statement. 
*/


//* /////// END OF CHALLENGE /////////
//* /////// END OF CHALLENGE /////////
//* /////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
