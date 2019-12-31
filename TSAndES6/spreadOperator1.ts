//sPREAD
const numbers = [1, 10, 99, -5];

console.log(Math.max(4, 5, 6, 9, 1));

console.log(Math.max(...numbers));

//REST
function makeArray(arg1: number, arg2: number, arg3: number, arg4: number) {
  return [arg1, arg2, arg3, arg4];
}
console.log(makeArray(1, 2, 5, 6)); //

function makeArray2(name: string, ...args: number[]) {
  return args;
}

console.log(makeArray2("Asia", 1, 2, 3, 4, 5, 6)); // [1,2,3,4,5,6]
