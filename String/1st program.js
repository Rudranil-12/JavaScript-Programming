const name = "Rudra"
const repocount = "20"

console.log(name + repocount + "Mallick"); // Old way to print or declare STRING

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // modern way to print or declare STRING

console.log(name[0]);

// STRING METHODS

console.log(name.__proto__);

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.charAt(2));

console.log(name.indexOf(`d`));

const anotherString = name.slice(-9, 4) //SLICEING in STRING
console.log(anotherString);
