// loops
// for 
// for (let i=1;i<=5;i++){
//     console.log("Hello riya");
// }

//while
// let i=1;
// while(i<=5){
//     console.log("Hello riya");
//     i++;
// }

//do-while
let i=1;
do{
    console.log("Hello riya");
    i++;
}
while(i<=5);

// for-of loop for iterating strings and arrays
let str="riyaindap";
for(let i of str){
    console.log(i);
}

// for-in for iterating objects
let student={
    name:"Riya",
    age:19,
    cpga:9.535
};

for (let key in student){
    console.log("key=",key + " value=", student[key]);
}

//practice 1(print all even num)
for (let i=0;i<=100;i++){
    // console.log(i)
    if(i%2!=0){
        console.log(i);
    }
    else{
    }
}

//strings  are immutable
let str1="riyaindap";
console.log(str1.length);
console.log(str1[0]);
//template literals
let obj={
    name:"riya",
    num1:1,
};
let output=`${obj.name} , you are a number ${obj.num1} person i have ever seen`;
console.log(output);

// escape char = \n:next line ,\t:tab space

// practice
let name=prompt("Enter your full name:")
let username= "@"+name+name.length;
console.log(username);