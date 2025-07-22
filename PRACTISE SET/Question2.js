// crate a game where you start any random game number. Ask the user to keep guassing the game number
// until the user enters until the user enters correct value

let gameNum = 25;
var userNum = prompt("Guess the game number : ");
console.log(userNum);

if(userNum != gameNum)
{
    userNum = prompt("You entered wrong number guess agin")
}
console.log("congralutaions you entered the right number!!");
