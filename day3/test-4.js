
//declaring contructor
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;

};

// declaring variable

var car = {
    "wheels":4,
    "engines":1,
    "seats":5
  };
  
  var motorBike = {
    "wheels":2,
    "engines":1,
    "seats":2
  };

console.log("this is first", car);
var myBike = new MotorBike();
myBike.turbo = "twin turbo";
console.log("this is last", myBike);
var yourBike = new MotorBike();
console.log(yourBike);

