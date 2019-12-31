interface NamedPerson3 {
  age: number;
  [propName: string]: any; //Not array and here we don't state the name of Key yet and the type of value (treated as optional)
}

function greeting3(person: NamedPerson3) {
  console.log(`Hello ${person.age}`);
}

function changeName3(person: NamedPerson3) {
  person.age = 34;
  console.log(`Hello ${person.age}`);
}

const persn3 = {
  firstName: "Asia",
  age: 30,
  hobbies: ["Cricket", "Cooking"] //propName
};

greeting3({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
// greeting3({ firstName: "Marry" }); //ERROR
greeting3({ hobbies: ["Cricket", "Cooking"], age: 20 });
greeting3({ age: 21 });
greeting3(persn3);
changeName3(persn3);
