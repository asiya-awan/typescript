//shouldn't let assign null as types unless you state so

//Nullable Types
let canBeNull = 12;
//canBeNull = null; //Error: strictNullCheck: true

let canAlsoBeNul; //by dafault undefined
canAlsoBeNul = null; //assign null later  // undefined can be assigned later w/o error

//union type
let canBeNull2: number | null = 12;
canBeNull2 = null;

let canThisBeAny = null; //let canThisBeAny:any = null;

canThisBeAny = 12;
console.log(canThisBeAny);
