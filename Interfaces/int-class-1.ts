interface NamedPerson2a {
  firstName: string;
  age?: number;
  [propName: string]: any; //Not array and here we don't state the name of Key yet and the type of value (treated as optional)
  greet?(lastName: string): void;
}

class Person2a implements NamedPerson2a {
  firstName: string;
  lastName: string;
  constructor(firstName: string) {
    this.firstName = firstName;
  }

  greet(lastName: string) {
    console.log(`Hi, ${this.firstName}, ${lastName}`);
  }
}

const myPerson2A = new Person2a("Asia");
// w/o constructor
// const myPerson2A = new Person2a();
//myPerson2A.firstName = "Asia";
myPerson2A.greet("Awan");
myPerson2A.lastName = "Malik";
myPerson2A.greet(myPerson2A.lastName);
