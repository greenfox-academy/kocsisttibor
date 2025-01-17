'use strict';
// 1st
// Call the ride method of the volvo, with 42 as a parameter

var volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
    return this.kms
  }
};

console.log(volvo.ride(42));





// 2nd
// Call the refuel function on the ferrari object using the bind method, with
// 52 as a parameter

var ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

function refuel(liters) {
  this.fuel += liters
  return this.fuel;
}

console.log(refuel.bind(ferrari)(52));





// 3rd
// Create a tesla object that has 3 properties
//  - type: string
//  - battery: number
//  - kms: number
//  - consunption: number
// And a method called ride, that takes a parameter celled km,
// and increments kms with it, then drains the battery based on the consumpltion 


var tesla = {
    type: "Tesla",
    battery: 1000,
    kms: 2000,
    consuption: 0.1,
    ride: function(km) {
        this.kms += km;
        this.battery -= km * this.consuption;
    }
}



tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);