//complex object

let complex1: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 300],
  output: function(all: boolean): number[] {
    return this.data;
  }
  // output: (all: boolean): number[] => this.data;   // error; 'this' in fat arrow func refer to window object
};

//type alias

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 300],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
