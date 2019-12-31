//FUnction Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = (value1: number, value2: number) => (value1 + value2) * 2;

console.log(myDoubleFunction(10, 20));
