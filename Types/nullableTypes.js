"use strict";
//shouldn't let assign null as types unless you state so
//Nullable Types
var canBeNull = 12;
//canBeNull = null; //Error: strictNullCheck: true
var canAlsoBeNul; //by dafault undefined
canAlsoBeNul = null; //assign null later  // undefined can be assigned later w/o error
//union type
var canBeNull2 = 12;
canBeNull2 = null;
var canThisBeAny = null; //let canThisBeAny:any = null;
canThisBeAny = 12;
console.log(canThisBeAny);
//# sourceMappingURL=nullableTypes.js.map