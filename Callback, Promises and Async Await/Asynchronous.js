console.log("one");
console.log("two");

function hello() {
    console.log("hello rudra");
}

setTimeout(hello, 4000); //4000 means = 4sec and it means after 4 sec our hello function will be run this is the work procedure of setTimeout function

console.log("three");
console.log("four");

//one,two,three,four will be printed and after 4 sec hello rudra will be printed.