            //ATTRIBUTE

let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id")
console.log(id); //Accessing the div attribute


let para = document.querySelector("p");
console.log(para.getAttribute("class")); //Accessing the p attribute


let pa = document.querySelector("p");
console.log(pa.setAttribute("class", "NewClass")); //Setting new attribute value



            //STYLE

// let divAttribute = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.innerText = "Hello"

//Un-Comment this to show the change in css



               //INSERT ELEMENTS

let newButton = document.createElement("button");
newButton.innerText = "Click On Me";
console.log(newButton);
//Creating a button

let div1 = document.querySelector("div");
div.append(newButton); //adds the button at the end of the node(div node)

// div.prepend(newButton); //Adds the button at the first of the node(div node)

// div.before(newButton); //Adds the button before of the node(div node)

// div.after(newButton); //Adds the button after of the node(div node)


           //DELETE ELEMENT

// newButton.remove(); 
//TO remove the Element(Here BUTTON Element) we can use .remove method