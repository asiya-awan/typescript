// Test it here: https://jsfiddle.net/maasha/x7wz1686/
var bunny = {
  name: 'Usagi',
  showName: function() {
    console.log(this.name);
  }
};

bunny.showName(); // Usagi   //this would refer to object in Es5


// Test it here: https://jsfiddle.net/maasha/z65c1znn/
console.log("this problem: -------------------------------- ")
var bunny1 = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    console.log(this.name)
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny1.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

console.log("Solution 1: store this -------------------------------- ")
//Solutions in ES5
//Solution 1:  Create a variable outside of the method’s inner function. Now the ‘forEach’ method gains access to ‘this’ and thus the object’s properties and their values.
var bunny1A = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    var _this = this;
    this.tasks.forEach(function(task) {
      console.log(_this.name + " wants to " + task);
    });
  }
};

bunny1A.showTasks();
console.log("Solution 2: bind -------------------------------- ")

//Solution 2: Use bind to attach the ‘this’ keyword that refers to the method to the method’s inner function.
var bunny1B = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
   
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    }.bind(this));
  }
};

bunny1B.showTasks();

// ES6
console.log(" ES6: --------------------------------- ")
var bunny2 = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    console.log(this.name)   //   arrow func( this) refer to its current surrounding scope
    this.tasks.forEach((task) =>{
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny2.showTasks();



// https://medium.com/free-code-camp/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881

