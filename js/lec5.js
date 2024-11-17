// function (definition+call)

function sum(a,b){
    console.log(a+b);
}

function sum1(a,b){
    sum=a+b;
    return sum;
}
let val=sum(12,13);
console.log(val);

// arrow functions
const arrowsum=(a,b)=>{
    console.log(a+b);
};
arrowsum(3,4);

// // practice q1
// function checkVowel(str){
//     str1=str.toLowerCase();
//     for (let i of str){
//         if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             console.log(`Encountered a vowel ${i}`);
//         }
//     }
// }

// let input=prompt("Enter a string:");
// checkVowel(input);

// doing same in arrow
// const checkVowel1=(str)=>{
//     str1=str.toLowerCase();
//     for (let i of str){
//         if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             console.log(`Encountered a vowel ${i}`);
//         }
//     }
// };

// let input1=prompt("Enter a string:");
// checkVowel1(input);

// forEach for arrays functioning for its each element (higher order function)
let arr1=[1,3,4,5,6,7];
arr1.forEach(function Myfunction(val,idx){
    console.log(val,idx);
})

let arr2=[3,4,5,6,7];

arr2.forEach(function square(val){
    result=val ** 2;
    console.log(result);
}
)

// map method (for creating a new array)
let new_arr=arr2.map((val)=>{
    return val*2;
});
console.log(new_arr);

// filter method(for filtering from original)
let new_arr2=arr2.filter((val)=>{
    return val%2==0;
});
console.log(new_arr2);

//reduce method