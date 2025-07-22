class person {
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

console.log(rudraObj.eat());
console.log(rudraObj.work()); // Here person class work() will not run here Engineer class work() will run

console.log(roni.work()); // Here person class work() will not run here Doctor class work() will run
