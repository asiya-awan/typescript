var Person2a = /** @class */ (function () {
    function Person2a(firstName) {
        this.firstName = firstName;
    }
    Person2a.prototype.greet = function (lastName) {
        console.log("Hi, " + this.firstName + ", " + lastName);
    };
    return Person2a;
}());
var myPerson2A = new Person2a("Asia");
// w/o constructor
// const myPerson2A = new Person2a();
//myPerson2A.firstName = "Asia";
myPerson2A.greet("Awan");
myPerson2A.lastName = "Malik";
myPerson2A.greet(myPerson2A.lastName);
