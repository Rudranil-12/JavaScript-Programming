let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX); //ClientX meaning Over X axis spreading
    console.log(e.clientY); //ClientY meaning Over Y axis spreading
}

let div = document.querySelector("div");
div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX); //ClientX meaning Over X axis spreading
    console.log(e.clientY); //ClientY meaning Over Y axis spreading
}
