//You are creating a website for your college. Create a user with 2 properties, name & email. It also has a method called viewData()
//that allows user to view website data.


let DATA = "secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData () {
        console.log("data = ", DATA);
    }
}

let student1 = new user("Rudranil", "rudranilmallick38@gmail.com");
let student2 = new user("Priya", "priyaahana@gmail.com");

console.log(student1);
console.log(student2.viewData());
