let arr = [1,2,3,4];
//forEach fucntion of array
// arr.forEach(function(val){
//     console.log(val+"hello")
// })

//map function
let val=arr.map(function(val){
    return val+12;
})
console.log(val);

//filter function
val=arr.filter(function(val){
    if(val>3){
        return true;
    }
})
console.log(val)

//find fuction
val=arr.find(function(val){
    if (val===2){
     return true;
    }
})
console.log(val)

//objects in js
let obj={
    name:"riya",
    age:19,
    education:"B.E in IT"
}
console.log(obj.name);
console.log(obj["education"]);

typeof obj;

function abcd(){

}

async function abcd(){
    let blob=await fetch(`https://randomuser.me/api/`);
    let ans= await blob.json();
    console.log(ans.results)
}

abcd();