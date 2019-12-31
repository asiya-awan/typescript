type BankAccount = { money: number; deposit: (value: number) => void };

let Myself: { name: string; bankAccount: BankAccount; hobbies: string[] };

let myself = {
  name: "asiya",
  bankAccount: {
    money: 20000,
    deposit: function(value: number): void {
      console.log(
        `${value} is deposited and current balance in account is ${this.money +
          value}`
      );
    },
    hobbies: ["cooking", "cricket"]
  }
};

console.log(myself.bankAccount.deposit(45));
