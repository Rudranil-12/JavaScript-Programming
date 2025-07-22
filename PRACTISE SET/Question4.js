//Avarage marks calculation

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks)
{
    sum = sum + val;
}
let Avarage = sum / marks.length;
console.log(sum);

console.log(`Avg marks of the class = ${Avarage}`);
