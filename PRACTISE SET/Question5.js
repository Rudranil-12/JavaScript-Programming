// print an array aftar giving 10% offer 

let item = [250,645,300,900,50];
for(let i = 0; i < item.length; i++)
{
    let offer = item[i] / 10;
    item[i] = item[i] - offer
}
console.log(`After offer the value will be ${item}`);
// OR
console.log(item);
 