function greeting(person: { name: string }) {
  console.log(`Hello ${person.name}`);
}

function changeName(person: { name: string }) {
  person.name = "Sofia";
  console.log(`Hello ${person.name}`);
}

const persn = {
  name: "Asia",
  age: 30
};

greeting(persn);
changeName(persn);
