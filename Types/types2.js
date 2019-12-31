"use strict";
//array
var hobbies = ["Cooking", "Cricket", "Studying", 22];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// hobbies = 100;   //Error
hobbies[4] = 55;
var hobbies1 = ["Cooking", "Cricket", "Studying"];
//hobbies1[3] = 12;
hobbies1[3] = "playing";
//TUPLES
var address = ["Superstreet", 99];
var address1 = ["Superstreet", 99];
// let address2:[string, number] = [99], "Superstreet"]
//Enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Orange"] = 100] = "Orange";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
console.log("Orange: " + Color.Orange);
console.log("Blue: " + Color.Blue);
//Any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//# sourceMappingURL=types2.js.map