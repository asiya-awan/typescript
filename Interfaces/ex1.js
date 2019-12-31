function greeting(person) {
    console.log("Hello " + person.name);
}
function changeName(person) {
    person.name = "Sofia";
    console.log("Hello " + person.name);
}
var persn = {
    name: "Asia",
    age: 30
};
greeting(persn);
changeName(persn);
