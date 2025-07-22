btn1.addEventListener("click",(e) => {
    console.log("button1 was clicked -- handler1 ");  
    // console.log(e);
    // console.log(e.type);
    
     
})

btn1.addEventListener("click",() => {
    console.log("button1 was clicked -- handler2 ");   
})


const handler3 = () => {
    console.log("button1 was clicked -- handler3 ");   
}
btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3)

// To remove the handler3 we do all the things