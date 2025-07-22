let heading = document.getElementById("heading"); // Selecting with ID
console.log(heading);
console.log("hello");


let headings = document.getElementsByClassName("rudra"); // Selecting with Class
console.dir(headings)
console.log(headings);


let paras = document.getElementsByTagName("p"); //selecting with Tag
console.log(paras);


let FirstElements = document.querySelector("p"); //1st element
console.dir(FirstElements);


let SecoundElements = document.querySelectorAll("p"); // All element
console.dir(SecoundElements);


let OneClass = document.querySelector(".rudra"); //Class access using query selector (1St element only)
console.dir(OneClass);


let AllClass = document.querySelectorAll("p"); // Class access using query selector (All element)
console.dir(AllClass);


let OneId = document.querySelector("#heading"); //ID access using query selector (1St element only)
console.dir(OneId);

