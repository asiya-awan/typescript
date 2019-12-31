class SimpleMath<T extends number | string> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number | string>(); //wouldn't give error, but give output Nan if one is string otherwise 200 if both are numbers
// const simpleMath = new SimpleMath<string>(); //would give error on compilation but give output 200 in running
// simpleMath.baseValue = "something";
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
