var SimpleMathM = /** @class */ (function () {
    function SimpleMathM() {
    }
    SimpleMathM.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMathM;
}());
// T extends U => means T has to be the same type as U
//so if I pick 'number' as a type for 'U' then 'T' also has to be a 'number'
var simpleMathM = new SimpleMathM();
simpleMathM.baseValue = 10;
// simpleMathM.multiplyValue = 20;
simpleMathM.multiplyValue = "20";
console.log(simpleMathM.calculate());
