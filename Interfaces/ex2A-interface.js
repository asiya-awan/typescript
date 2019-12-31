function greeting2a(person) {
    console.log("Hello " + person.firstName);
}
function changeName2a(person) {
    person.firstName = "Sofia";
    console.log("Hello " + person.firstName);
}
var persn2a = {
    firstName: "Asia",
    age: 30,
    hobbies: ["Cricket", "Cooking"],
    greet: function (lastName) {
        console.log("Hi I am " + this.firstName + ", " + lastName);
    }
};
greeting2a({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
greeting2a({ firstName: "Marry" });
greeting2a(persn2a);
changeName2a(persn2a);
console.log(persn2a);
console.log(persn2a["hobbies"]);
persn2a.greet("Awan");
