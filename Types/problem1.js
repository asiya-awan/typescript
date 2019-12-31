"use strict";
var Myself;
var myself = {
    name: "asiya",
    bankAccount: {
        money: 20000,
        deposit: function (value) {
            console.log(value + " is deposited and current balance in account is " + (this.money +
                value));
        },
        hobbies: ["cooking", "cricket"]
    }
};
console.log(myself.bankAccount.deposit(45));
//# sourceMappingURL=problem1.js.map