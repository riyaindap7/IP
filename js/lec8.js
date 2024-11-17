let btn1=document.getElementById("butt");
btn1.onclick=()=>{
   console.log('button is clicked'); 
//    alert('helo');
};

btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);

}

// event listeners(you can have mutliple event for a node otherwise earlier approach meh bas latest event apply hots hai)
btn1.addEventListener("click",()=>{
    console.log("button1 it is");
});

let handle1=()=>{
    console.log("button1 it is-handling 2");
};
btn1.addEventListener("click",handle1);

btn1.removeEventListener("click",handle1);

// practice q
let body=document.querySelector("body");
let current_mode="light";
let btn2=document.getElementById("butt1");
btn2.addEventListener("click",()=>{
    if (current_mode=="light"){
        current_mode="dark";
        body.style.backgroundColor="black";
    }
    else{
        current_mode="light";
        body.style.backgroundColor="beige";
    }
    
})