class person {
    constructor() {
        this.specis = "homo sapiens"
    }
    eat() {                                          //eat() is a function
        console.log("Eating");
    }

    sleep() {                                       //sleep() is a function
        console.log("Sleeping");
    }

    work() {
        console.log("do nothing");
    }
}


class Engineer extends person {           //extends preson means inherit the properties of person to Engineer
    work() {                                            //work() is a function
        console.log("Solve problems");
    }
}

class Doctor extends person {           //extends preson means inherit the properties of person to Doctor
    work() {                                            //work() is a function
        console.log("Treat Patients");
    }
}


let rudraObj = new Engineer();
let roni = new Doctor();
let p1 = new person(); 

console.log(p1);
console.log(rudraObj);
