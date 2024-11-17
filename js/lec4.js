
// array mutable items
let arr=[1,2,3,4,5,6,7];
console.log(typeof arr);
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
arr[2]=2;
console.log(arr);

// looping in array
for (let index=0;index<=arr.length;index++){
    console.log(arr[index]);
}

for (let i of arr){
    console.log(i);
}

// practice q1
let sum=0;
let marks=[85,97,44,37,76,60];
for (let i of marks){
    sum+=i;
}
let avg=sum/marks.length;
console.log(avg);

// practice q2
let arr2=[250,645,300,900,50];
let i=0;
for (let val of arr2){
    let offer=val/10;
    // console.log(offer);
    arr2[i]= arr2[i]-offer;
    console.log(arr2[i]);
    i++;
}

// array methods
arr2.push(90)
console.log(arr2);
arr2.push(90,50,34,899)
console.log(arr2);

arr2.pop()
console.log(arr2);

let arr3=arr2.concat(arr);
console.log(arr3);