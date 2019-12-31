function returnMyName(): string {
  return "asia";
}

console.log(returnMyName());

//void
function sayHello(): void {
  console.log("Hello");
  //return 'asia'
}

//argument types
function multiply(value1, value2): number {
  return value1 * value2;
}

console.log(multiply(2, "ad")); //NaN

function multiply1(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply1(2, 5)); //NaN

//Function types

let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply1;
// myMultiply()//error
console.log(myMultiply(2, 6));

//function types es6  - order is important, name isn't
let myMultiplication: (val1: number, val2: number) => number; // this is function type and not a function
// myMultiplication = sayHello;  //Error; funct type doesn't meet function defination
// myMultiplication();
myMultiplication = multiply1;
console.log(myMultiplication(3, 3));

myMultiplication(4, 5);
// console.log(myMultiplication(4, 4)); //Error: used before being assigned

//Object types  - property name is impt
// let userData = {
//   name: "Asia",
//   age: 23
// };

// usesrData = {
//   a: "adfad",
//   b: 34
// };

let userData2: { name: string; age: number; hobbies: string[] } = {
  name: "Asia",
  age: 24,
  hobbies: ["cricket", "luddo"]
};

//complex object

let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 300],
  output: function(all: boolean): number[] {
    return this.data;
  }
  // output: (all: boolean): number[] => this.data;   // error; 'this' in fat arrow func refer to window object
};

console.log(complex.output(true));

//complex = {} //ERROR; doesnt meet object type
