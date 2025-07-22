class person {
    constructor() {
        console.log("Enter parent constructor");
        this.specis = "homo sapiens"
    }
    eat() {                                          //eat() is a function
        console.log("Eating");
    }
}


class Engineer extends person {           //extends preson means inherit the properties of person to Engineer
    constructor (branch) {
        console.log("Enter child constructor");
        super();      // To invoke parent class constructor
        this.branch = branch;
        console.log("Exit from parent constructor");
    }
    work() {     
        console.log("Solve problems");
    }
}


let EnjineerObj = new Engineer("chemical engineer");

console.log(EnjineerObj);
