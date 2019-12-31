interface NamedPerson2a {
  firstName: string;
  age?: number;
  [propName: string]: any; //Not array and here we don't state the name of Key yet and the type of value (treated as optional)
  greet?(lastName: string): void;
}

function greeting2a(person: NamedPerson2a) {
  console.log(`Hello ${person.firstName}`);
}

function changeName2a(person: NamedPerson2a) {
  person.firstName = "Sofia";
  console.log(`Hello ${person.firstName}`);
}

const persn2a: NamedPerson2a = {
  firstName: "Asia",
  age: 30,
  hobbies: ["Cricket", "Cooking"], //propName
  greet(lastName: string) {
    console.log(`Hi I am ${this.firstName}, ${lastName}`);
  }
};

greeting2a({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
greeting2a({ firstName: "Marry" });
greeting2a(persn2a);
changeName2a(persn2a);
console.log(persn2a);
console.log(persn2a["hobbies"]);
persn2a.greet("Awan");
