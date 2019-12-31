"use strict";
//complex object
var complex1 = {
    data: [100, 3.99, 300],
    output: function (all) {
        return this.data;
    }
    // output: (all: boolean): number[] => this.data;   // error; 'this' in fat arrow func refer to window object
};
var complex2 = {
    data: [100, 3.99, 300],
    output: function (all) {
        return this.data;
    }
};
//# sourceMappingURL=customTypes.js.map