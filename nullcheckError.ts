let firstName: string = "Asia";
let age: number = 32;

let anyting;
anything = 12;

//myName = 30;

function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }

  return result; //REsult is used before being assigned(in case isTrue is false); strictNullCheck: true
}

//would get noUnusedParameter
