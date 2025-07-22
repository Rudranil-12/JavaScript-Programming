class ToyotaCar {
    constructor(brand, milage) {
        console.log("Creating new object");
            this.brand = brand;
            this.milage = milage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

// console.log(ToyotaCar);

let fortuner = new ToyotaCar("fortuner", 10); //Constructor will be invoked and 10 is the milage
console.log(fortuner);

let kia = new ToyotaCar("kia", 12); //Constructor will be invoked and 12 is the milage
console.log(kia);
