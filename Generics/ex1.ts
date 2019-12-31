// Simple Generics

function echo(data: any) {
  return data;
}

console.log(echo("Maria"));
console.log(echo(23).length);
console.log(echo({ name: "Aaa", age: 28 }));

//Better Generic

function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("Maria").length);
console.log(betterEcho(23).length);
console.log(betterEcho<number>(23).length);
console.log(betterEcho<number>(23));
console.log(betterEcho({ name: "Aaa", age: 28 }));

//
