//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
function printAll2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana", "Cider"]);
printAll(["Apple", "Banana", "Cider"]);
printAll2("Apple", "Banana", "Cider");
