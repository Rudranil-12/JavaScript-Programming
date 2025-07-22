let myname = "Rudranil"
let anothername = myname
anothername = "roni"
console.log(anothername);
console.log(myname);


// HEAP MEMORY

let userone = {
    email: "roni@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "rudra2005@gmail.com"

console.log(userone.email);
console.log(usertwo.email);