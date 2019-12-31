/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

console.log("--- Validators ---");
console.log(typeof validators);
console.log(validators);
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}

//2 ways to have compiled files
//(1) tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
// (2) index.html (excerpt) #
//  <script src="Validation.js" type="text/javascript" />
//  <script src="LettersOnlyValidator.js" type="text/javascript" />
//  <script src="ZipCodeValidator.js" type="text/javascript" />
//  <script src="Test.js" type="text/javascript" />
