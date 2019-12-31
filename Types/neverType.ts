//never
function neverReturns(): never {
  throw new Error("An Error");
}

console.log(neverReturns());
