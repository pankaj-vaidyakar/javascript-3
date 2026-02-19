// constructor function in js

// Constructor function is special function used to create objects with the same structure

// it used with the "new" keyword
// it used with the "this" keyword  



// 3 ways to make object

//  object literal
// let obj = {}

// Constructor function

// object.create method


// function Nike_product(x,y){

//     this.name = x
//     this.price = y

// }
// let a = new Nike_product("jordan",5000)

// console.log(a);


function Student(a,b,c,d,e){

    this.name = a;
    this.age = b;
    this.number = c;
    this.email = d;
    this.class = e;

}

// let x = new Student("Rahul",16,9172438203,"Rahul@gmail.com","10th")

// console.log(x);


function Add(a,b,c){
 
     this.name = a
     this.age = b
     this.email = c
}

let x = new Add("pankaj",15,"pankaj@gmail.com")

console.log(x);
    




