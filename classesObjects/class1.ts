class Person {
  name: string;
  private type: string;
  protected age: number = 25; //class or object inherit from this class

  constructor(name: string, public userName: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Cool");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}
//private can only be used within Class
//protected can only be used with class and inherited class

const person = new Person("Admin", "admin");
console.log(person.name, person.userName);
person.printAge();
// person.setType("Booring");

//Inheritance
class Asia extends Person {
  // name = "Asia";
  constructor(username: string) {
    super("Asia", username); //parent class constructor
    this.age = 31;
    // console.log(this.type)  //error : private
  }
}

console.log("----Inheritance ----");
const asia = new Asia("asiaawan");
console.log(asia);
console.log(asia.printAge());

//Getter and Setters
class Plant {
  private _species: string = "Default";
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Defaults";
    }
  }

  get species() {
    return this._species;
  }
}

let plant = new Plant();
console.log(plant.species); //Default
plant.species = "Gren Aloma";
console.log(plant.species); //Gren Aloma

//Static Properties and Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));
