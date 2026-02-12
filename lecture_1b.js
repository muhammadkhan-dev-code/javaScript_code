// ----------------Scope In Java Script -------------

let globalVar = " I am Global Variable ";
function checkScope() {
  let localVar = " I am Local Variable ";
  console.log(globalVar);
  console.log(localVar);
}

if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Works
}

checkScope();
/**
 *  console.log(localVar); this will give an error  and also 
    console.log(blockVar); // Error: blockVar is not defined
 

 * 1 Global Scope - Variables declared outside any function are globally accessible from anywhere in your code:
 * 
 * 2 Function Scope - Variables declared inside a function only exist within that function:
 * 
 * 3 Block Scope - Variables declared with let or const inside a block (like an if statement or loop)
 * are only accessible within that block:
 */

    if (true) {
  var oldStyle = "I escape the block";
}
console.log(oldStyle); // Works (but usually not what you want)

let outer="Outer Variable";

function parent(){
    let middle="Middle Variable";

    function Children(){
        let inner="Inner Variable";
        console.log(inner, middle, outer);

    }
    Children();
}
/**
 * The child function can access its own variables plus those from parent scopes,
 *  but parent functions can't access child variables
 */
parent()

// With let (block-scoped)
if (true) {
  let blockVar = "trapped";
}
console.log(blockVar); // Error: blockVar is not defined

// With var (function-scoped, ignores blocks)
if (true) {
  var blockVar = "escaped";
}
console.log(blockVar); // Works! Outputs: "escaped"

// --------------Lexical Scope --------------

let username= "MUHAMMAD KHAN";

function greet(){
    console.log(` Hi Good Evening: ${username}`);
}
 function goodBy(){
    let username="Muhammad Aslam";
    console.log(`Good Bye: ${username}`);
    greet();
 }
 goodBy();
/**
 * In this example, the greet function accesses the username variable from its outer scope (global scope),
 *  while the goodBy function has its own username variable that shadows the global one. 
 *  When greet is called inside goodBy, it still accesses the global username, demonstrating lexical scoping.
 */

let global = "global";
function outer() {
  let outerVar = "outer";
  
  function inner() {
    let innerVar = "inner";
    
    // Looks for variables in this order:
    // 1. inner's scope
    // 2. outer's scope  
    // 3. global scope
    
    console.log(innerVar);  // Found in step 1
    console.log(outerVar);  // Found in step 2
    console.log(global);    // Found in step 3
  }
  
  inner();
}

function makeCounter() {
  let count = 0; // This variable is in makeCounter's scope
  
  return function() {
    count++;
    return count;
  };
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3