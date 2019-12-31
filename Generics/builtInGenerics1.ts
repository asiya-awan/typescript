//Built in Generics

//custom type
type objT = { firstName: string; lastName: string; age: number };

const testNumResults: Array<number> = [2.34, 5.5, 23.9];
const testStrResults: Array<string> = ["alpha", "bravo"];

let testObjTResults: Array<objT> = [
  {
    firstName: "Asia",
    lastName: "Awan",
    age: 30
  },
  {
    firstName: "Shazia",
    lastName: "Awan",
    age: 22
  }
];

testNumResults.push(-2.99);
// testNumResults.push("String"); //Error

testStrResults.push("Charlie");
// testStrResults.push(434); //ERROR

testObjTResults.push({
  firstName: "Nazneen",
  lastName: "Awan",
  age: 20
});

// testObjTResults.push({    //ERROR
//   lastName: "Awan",
//   age: 20
// });
