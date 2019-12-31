//string
let myName = "Asia";
//myName = 28; //typescript shows and give error but not javascript

//number
let myAge = 32;
//myAge = myName   //Error

//boolean

let hasHobbies = false;
//hasHobbies =1;  //Error; even tough you can cast it

//assign types
let myRealAge; //let myRealAge: any   (default)
myRealAge = 27;
myRealAge = "27";

console.log(myRealAge);

let myRealAge2: number;
myRealAge2 = 23;
//myRealAge2 = '23';  //ERROR

let myRealAge3: number = 31;
