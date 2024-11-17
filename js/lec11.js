// classes and objects

const student={
    name:"riya Indap",
    marks:9.56,
    printMarks:function (){
        console.log(this.marks);
    },
    
};
console.dir(student);
student.printMarks();

const Shreya={
    salary:"15,00,000",
}

Shreya.__proto__=student;  // prototype is a special propetry of objects


// class template for creating objects
class Car{
    constructor(){
        console.log("creating new objects");
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop");

    }
    brandName(brand){
        this.brand=brand;
    }
}

let mercedes=new Car();
mercedes.brandName("mercedes");

// inheritance
class Vehicle{
    speed(){
        console.log("speed is amazing");
    }
}

class Car1 extends Vehicle{
}

let obj=new Car1();
console.log(obj.speed());

// super keyword (to call constructor of parent from child)
class Person{
    constructor(){
        this.species="homo";
    }
    eat(){
        console.log("eat");
    }
}

class Employee extends Person{
    constructor(branch){
       super();  //to invoke parents constructor
        this.branch=branch;
    }
    work(){
        console.log("Person is working");
    }
}

let manObj=new Employee("finance");


// practice q1
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("you are viewing the website");
    }
}

let UserObj= new User("riya","riyaindap2000");


// practice q2
class User2{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("you are viewing the website");
    }
}

class Admin extends User2{
    editData(){
        console.log("editing the website data");
    }
}

let AdminObj=new Admin("admin","admin2000");


// try & catch block
let a=3;
let b=4;
try{
    console.log("a+b=",a+c);
}
catch(err){
    console.log(err);
}
