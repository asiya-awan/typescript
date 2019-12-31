var variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);
//Block Scope
function reset() {
    console.log(variable); //undefined
    var variable = null;
    console.log(variable); //null
}
reset();
console.log(variable); // another value
