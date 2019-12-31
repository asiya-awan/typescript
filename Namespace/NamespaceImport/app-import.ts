/// <refrence path="CircleMath.ts" />
/// <refrence path="RectangleMath.ts" />
import CircleMath = MyMath.Circle;
console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.Circle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));

// tsc app-import.ts --outFile app-import.js
