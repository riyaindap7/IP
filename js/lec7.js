// attribute manipulation
let id=para.getAttribute("id");
console.log(id);

let id1=para.getAttribute("name");
console.log(id1);

let heading3=document.querySelector("h1");
console.log(heading3.getAttribute("class"));
// to set attribute
heading3.setAttribute("class","parasecure");
// to dynamically change styling
div.style.backgroundColor="red";
// to create a new element
let butt=document.createElement("button");
butt.innerText="Hit me!";
console.log(butt);
div.append(butt);   // add new element at end
div.prepend(butt);   // add new element at start
div.before(butt);   // add new element before the node element
div.after(butt);

butt.remove();



// practice q1
let butt_new=document.createElement("button");
butt_new.innerText="Click me"
butt_new.style.backgroundColor="red";
butt_new.style.color="white";
let body=document.querySelector("body");
body.prepend(butt_new);

// practice q2
// classList ka example
let para=document.querySelector("p");
para.classList.add("newPara");
console.dir(para);
// newPara.innerText="Helllo from Riya";