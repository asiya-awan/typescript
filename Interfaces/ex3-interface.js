function greeting3(person) {
    console.log("Hello " + person.age);
}
function changeName3(person) {
    person.age = 34;
    console.log("Hello " + person.age);
}
var persn3 = {
    firstName: "Asia",
    age: 30,
    hobbies: ["Cricket", "Cooking"] //propName
};
greeting3({ firstName: "Max", age: 32 }); //NO ERROR as age is set as optional
// greeting3({ firstName: "Marry" }); //ERROR
greeting3({ age: 21 });
greeting3(persn3);
changeName3(persn3);
