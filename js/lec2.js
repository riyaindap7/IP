let a= 3;
let b= 2;

// unary
console.log("a+b=",a+b);
// assignment
console.log("a+4=",a+=4);
//comparison
console.log("a==b :",a==b);
console.log("a!=b :",a!=b);
console.log("a<=b :",a<=b);
// logical 
let con1=a>b;
let con2=a>1;
console.log("con1 && con2 :",con1&&con2);
console.log("con1 || con2 :",con1||con2);

//conditional
//if statement
let age=18;
if (age>16){
    console.log("you can vote");
}
if (age<=16){
    console.log("you cannot vote");
}

//if-else statement
let mode="blue";
if (mode=="dark"){
    console.log("black");
}
else{
    console.log(mode);
}

//else-if

//ternary
let agee=17;
let result = agee >= 18 ?"dark":"White";
console.log(result);

//practice1
// let num=prompt("Enter a number:");
// if(num%5==0){
//     console.log("The number is multiple of 5");
// }
// else{
//     console.log("The number is not multiple of 5")
// }


// practice2
let score=prompt("Enter your score:");
if(score>=80 && score<=100){
    console.log("YOur grade is A");
}
else if(score>=70 && score<=79){
    console.log("YOur grade is B");
}
else if(score>=60 && score<=69){
    console.log("YOur grade is C");
}
else if(score>=50 && score<=59){
    console.log("YOur grade is D");
}
else{
    console.log("YOur grade is F");
}