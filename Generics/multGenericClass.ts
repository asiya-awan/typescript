class SimpleMathM<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

// T extends U => means T has to be the same type as U
//so if I pick 'number' as a type for 'U' then 'T' also has to be a 'number'

const simpleMathM = new SimpleMathM<number, string>();
simpleMathM.baseValue = 10;
// simpleMathM.multiplyValue = 20;
simpleMathM.multiplyValue = "20";
console.log(simpleMathM.calculate());
