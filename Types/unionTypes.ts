//union types
let myRealRealAge: number | string = 27;

myRealRealAge = "27";
// myRealRealAge = true;  //ERROR

//Check Types
let finalValue = "A string";

if (typeof finalValue == "string") {
  console.log("It is String");
} else if (typeof finalValue == "number") {
  console.log("it is number");
} else {
  console.log("UNKNOWN");
}
console.log("--------- SWITCH --------");
switch (typeof finalValue) {
  case "number": {
    console.log("IT is number");
    break;
  }
  case "string": {
    console.log("It is String");
    break;
  }

  case "boolean": {
    console.log("It is bool");
    break;
  }
  case "any": {
    console.log("It is any");
    break;
  }
  default: {
    console.log("UNKNOWN");
    break;
  }
}
