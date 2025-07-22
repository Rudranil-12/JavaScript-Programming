class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

console.log(ToyotaCar);

let fortuner = new ToyotaCar(); //Constructor will be invoked
console.log(fortuner);

console.log(typeof fortuner);
console.log(fortuner.start);
console.log(fortuner.stop);

