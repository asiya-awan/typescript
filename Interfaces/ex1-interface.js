function greeting1(person) {
    console.log("Hello " + person.firstName);
}
function changeName1(person) {
    person.firstName = "Sofia";
    console.log("Hello " + person.firstName);
}
var persn1 = {
    firstName: "Asia",
    age: 30
};
// greeting1({ firstName: "Max", age: 32 });
greeting1({ firstName: "Max" });
greeting1(persn1);
changeName1(persn1);
