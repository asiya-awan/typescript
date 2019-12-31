//Inheritance

interface NamedPersonA {
  firstName: string;
  age?: number;
  [propName: string]: any; //Not array and here we don't state the name of Key yet and the type of value (treated as optional)
  greet?(lastName: string): void;
}

interface AgedPerson extends NamedPersonA {
  age: number;
}

const oldPerson1: AgedPerson = {
  age: 28,
  firstName: "Sania",
  greet(lastName: string) {
    console.log("Hello ,", lastName);
  }
};

oldPerson1.greet("Mirza");
console.log(oldPerson1);
