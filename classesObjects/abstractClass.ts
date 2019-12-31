abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    this.budget * 2;
  }
}

//Abstract class can't be instantiated
//the class that extends abstract class and implments abstract method of abstract class can create instance of it

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(
  `newProject: ${newProject.projectName}, budget: ${newProject.budget}`
);
newProject.changeName("OttoLearn");
console.log(
  `newProject: ${newProject.projectName}, budget: ${newProject.budget}`
);
