// asynchronous programming
console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},4000);

console.log("three");
console.log("four");

// callback (when u pass a function in another function's parameter)
// synchronous callback
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
 sumCallback(a,b);
}

calculator(1,2,sum);

// asynchronous callback
function hello(){
    console.log("hello");
}

setTimeout(hello,3000);

// callback hell

// promises (object,solution to callback hell)
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve(123);
    // reject("some error has ocurred");
})
// three states=pending,fulfilled,rejected




