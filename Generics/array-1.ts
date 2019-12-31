//Arrays

function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

function printAll2<T>(...args: T[]) {
  args.forEach(element => console.log(element));
}

printAll(["Apple", "Banana", "Cider"]);
printAll<string>(["Apple", "Banana", "Cider"]);

printAll2<string>("Apple", "Banana", "Cider");
