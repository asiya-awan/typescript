//array
let hobbies: any[] = ["Cooking", "Cricket", "Studying", 22];

console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// hobbies = 100;   //Error
hobbies[4] = 55;

let hobbies1: string[] = ["Cooking", "Cricket", "Studying"];

//hobbies1[3] = 12;
hobbies1[3] = "playing";

//TUPLES
let address = ["Superstreet", 99];
let address1: [string, number] = ["Superstreet", 99];
// let address2:[string, number] = [99], "Superstreet"]

//Enums
enum Color {
  Gray, //0
  Green, //1
  Orange = 100, //100
  Blue //101
}

let myColor: Color = Color.Blue;
console.log(myColor);
console.log(`Orange: ${Color.Orange}`);
console.log(`Blue: ${Color.Blue}`);

//Any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
