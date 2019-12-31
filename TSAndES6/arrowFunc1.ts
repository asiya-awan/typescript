const addNumbers1 = function(number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers1(4, 5));

const addNumbers2 = (number1: number, number2: number): number =>
  number1 + number2;

console.log(addNumbers2(4, 5));

const greet = (): void => console.log("Hello");
greet();

const greetFriend = (friend: string): string => `Hello ${friend}`;
console.log(greetFriend("Rani"));
