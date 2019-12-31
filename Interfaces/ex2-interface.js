function greeting1(person) {
    console.log("Hello " + person.firstName);
}
function changeName1(person) {
    person.firstName = "Sofia";
    console.log("Hello " + person.firstName);
}
var persn2 = {
    firstName: "Asia",
    age: 30,
    hobbies: ["Cricket", "Cooking"] //propName
};
greeting1({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
greeting1({ firstName: "Marry" });
greeting1(persn2);
changeName1(persn2);
