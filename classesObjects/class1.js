var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 25; //class or object inherit from this class
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Cool");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
//private can only be used within Class
//protected can only be used with class and inherited class
var person = new Person("Admin", "admin");
console.log(person.name, person.userName);
person.printAge();
// person.setType("Booring");
//Inheritance
var Asia = /** @class */ (function (_super) {
    __extends(Asia, _super);
    // name = "Asia";
    function Asia(username) {
        var _this = _super.call(this, "Asia", username) || this;
        _this.age = 31;
        return _this;
        // console.log(this.type)  //error : private
    }
    return Asia;
}(Person));
console.log("----Inheritance ----");
var asia = new Asia("asiaawan");
console.log(asia);
console.log(asia.printAge());
//Getter and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Defaults";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Gren Aloma";
console.log(plant.species);
