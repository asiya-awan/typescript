interface NamedPerson2 {
  firstName: string;
  age?: number; //optional
  [propName: string]: any; //flexible //Not array and here we don't state the name of Key yet and the type of value (treated as optional)
}

function greeting2(person: NamedPerson2) {
  console.log(`Hello ${person.firstName}`);
}

function changeName2(person: NamedPerson2) {
  person.firstName = "Sofia";
  console.log(`Hello ${person.firstName}`);
}

const persn2 = {
  firstName: "Asia",
  age: 30,
  hobbies: ["Cricket", "Cooking"] //(propName:string): any
};

greeting2({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
greeting2({ firstName: "Marry" });
greeting2(persn2);
changeName2(persn2);
