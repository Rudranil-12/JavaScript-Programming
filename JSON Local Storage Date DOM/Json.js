let student = {
    name: "Rudra",
    college: "TINT",
    batch: {
        namebatch: 23-27,
        dept: "csbs",
    },
};

console.log(typeof student);
console.log(student);

let str = JSON.stringify(student);
console.log(typeof str);

console.log(str);


let newStudent = JSON.parse(str);
console.log(typeof newStudent);
console.log(newStudent);
