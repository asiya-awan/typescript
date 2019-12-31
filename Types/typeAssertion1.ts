let someValue: any = "this is a string";

//Type assertions have two forms. One is the “angle-bracket” syntax:

let strLength0: number = (<string>someValue).length;
let strLength1: number = someValue.length;
console.log(`strLength0: ${strLength0}`);
console.log(`strLength: ${strLength1}`);
// And the other is the as-syntax:
let strLength2: number = (someValue as string).length;
console.log(`strLength: ${strLength2}`);
