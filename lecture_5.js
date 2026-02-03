// -------------------- Functions In Js ------------------------

// function definition with parameters 
function AddNumbers(a, b) {
    return a + b;
}
console.log(AddNumbers(5, 10)); // Output: 15 arguments passed to function


// Function Expression
const MultiplyNumbers = function (a, b) {
    return a * b;
};
console.log(MultiplyNumbers(5, 10)); // Output: 50


function loginUserMessage(username="Guest") {
    /* 
    if (username===undefined) {
         return "Welcome back, Guest!"
     }*/

    if (!username) {
        return ` username not defined. Welcome back, Guest!`
    }

    return `Welcome back, ${username}!`
}
console.log(loginUserMessage("Muhammad Khan")); // Output: Welcome back, Muhammad Khan!

console.log(loginUserMessage())  // Output: Welcome back, Guest!


/*
/when we don't know that how many parameters
 will be passed to function
*/

function calculatePrice(...nums){
    return  nums
}

console.log(calculatePrice(2,3,4,50,100,200)); // Output: undefined


const user={
    username:"Muhammad Khan",
    price:100,
}

function hanldeObject(anyObject){
    console.log(`Username : ${anyObject.username} and Price ${anyObject.price}`);
    
}

hanldeObject(user); // Output: Username : Muhammad Khan and Price 100

// Array pass to function
const arr=[10,20,30,40,50];

function getSecondValue(anyArray){
    return anyArray[1];
}

// console.log(getSecondValue(arr));

// ------------- Scope In JS ---------------------

var b= 300 // global scope
let a=100; // global scope
const c=300

if ( true){
     
    let a=10; // block scope 
    var b= 20 // global scope var keyword
    const c=30;  
    console.log(`Inner values for a:  ${a} , b ${b} and c ${c}`);

}
console.log(`Outer Value for a ${a}  ,  b:${b} and c ${c} `);

// Nested Scope 
function one(){
    const username="Muhammad Khan"; // function scope
    function two(){
        const website="Youtube " // can not access out of this loop

        console.log(`Username  inside the nested function ${username}  `) // can access parent function variable
    }
    two()
    console.log(`Access the Website Name : ${website}`);
}


if (true){

    const username="muhammad"

    if(username=="muhammad"){
        const website=" Apnatube"
        console.log(`Username is ${username} and Website is ${website}`);
    }
}


//-------------intersting -----------------

function addone(num){
    return num + 1;

}
console.log(addone(5)); // Output: 6

// Expression Function

const addTwo= function (num){
    return num+2
}

console.log(addTwo(5)); // Output: 7

// ----------- Arrow Function -----------------

// ----------this keyword-------

const newUser ={
    username:"Muhammad Khan",
    price:100,
    welcomeMsg:function(){
        console.log(this); // this keyword shows current context
        return `Welcome to Website , ${this.username }` // this is used to show current context
         
    }

}

console.log(newUser.welcomeMsg());
newUser.username="M khan"
console.log(newUser.welcomeMsg());

// console.log(this); // in node js it will show empty object {} but in browser it will show window object

const chai = function (){
     let username="ali"
    console.log(this.username); // undefined as this is not bound to any object 
} 

const newChai=()=>{
    let username="Ali"
    console.log(this); 
    // output: {} in node js and window object in browser as arrow function
    //  does not have its own this and it takes this from the surrounding context
    console.log(this.username); // undefined as this is not bound to any object 
    
}

// Arrow Function
  // explicit return 
const addNumbs=(a,b)=> {
    return a+b;
}
console.log(addNumbs(5,10)); // Output: 15

// implicit return 
const multiplyNumbs=(a,b)=> a*b;

const subtract =(a,b)=>(a-b);

