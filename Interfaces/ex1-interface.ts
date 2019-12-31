interface NamedPerson {
  firstName: string;
}

// interface NamedPerson {
//   firstName: string;
//   age? : number
// }

function greeting1(person: NamedPerson) {
  console.log(`Hello ${person.firstName}`);
}

function changeName1(person: NamedPerson) {
  person.firstName = "Sofia";
  console.log(`Hello ${person.firstName}`);
}

const persn1 = {
  firstName: "Asia",
  age: 30
};

// greeting1({ firstName: "Max", age: 32 });  //ERROR
greeting1({ firstName: "Max" });
greeting1(persn1);
changeName1(persn1);
