class parent {
    hello() {
        console.log("Welcome");        
    }
}

class Child extends parent {}
let obj = new Child();

console.log(obj);
console.log(obj.hello);
console.log(obj.bb); //It will be not work 
