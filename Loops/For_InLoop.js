let student = {
    name: "Rudranil",
    age: 20,
    cgpa: 6.86,
    isPass: true
};
// for(let i in student)
// {
//     console.log(i);
// }

for(let key in student)
{
    console.log("key = ", key, "value = ", student[key]);
}
