// -------------------Control flow in javascript------------
// Control flow statements are used to determine the order in which code is executed based on certain conditions.

// 1 If-else statement

/* <  <= >= >= (== used for value comparison only)
      (=== used for value and data type comparison) 
     != !==
*/
let isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("You are logged in.");
}
else{
    console.log("Please log in to continue.");
}

let temperature = 50;
if(temperature > 30){
    console.log("It's a hot day.");
}
else if(temperature >= 20 && temperature <= 30){
    console.log("It's a warm day.");
}
else{
    console.log("It's a cold day.");
}

const balance=1000;

if(balance>500) console.log("You have sufficient balance.");
else console.log("Insufficient balance.");


// Nesting if else 
let age = 25;
let hasLicense = true;

if(age >= 18){
    if (hasLicense){
        console.log("You are eligible to drive.");
    }
    else{
        console.log("You need a driving license to drive.");
    }
}
else{
    console.log("You are not eligible to drive.");
}

const UserLoggedI= true;
const debitCard= true;
const loggedinfromGoogle= false;
const loggedInFromEmail=true
if(UserLoggedI && debitCard && loggedinfromGoogle){
    console.log("You can make a purchase.");
}
else{
    console.log("You cannot make a purchase.");
}
if (loggedInFromEmail || loggedinfromGoogle){
    console.log("You are logged in.");
}
else{
    console.log("You are logged in Using Guest.");
}

// 2 Switch statement
let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}

// for duplicate cases Window  SHIFT +ALT+ DOWN ARROW 
console.log("The day is: " + dayName);

let month="june"
switch(month){
    case "january":
        console.log(' The month is : January');
        break;
    case "february":
        console.log(' The month is : February');
        break;
    case "march":
        console.log(' The month is : March');
        break;
    case "april":
        console.log(' The month is : April');
        break;
    case "may":
        console.log(' The month is : May');
        break;
    case "june":
        console.log(' The month is : June');
        break;
    case "july":
        console.log(' The month is : July');
        break;
    case "august":
        console.log(' The month is : August');
        break;      
    case "september":
        console.log(' The month is : September');
        break;
    case "october":
        console.log(' The month is : October');
        break;
    case "november":
        console.log(' The month is : November');
        break;
    case "december":
        console.log(' The month is : December');
        break;  
    default:
        console.log('Invalid month');
        break;      
}

// truth and false values 
const userEmail="m@gmail.com" // true value
if(userEmail){
    console.log("Email is verified");
} else{
    console.log("Please provide an email");
}
const userEmail1="" // false value
if(userEmail1){
    console.log("Email is verified");
} else{
    console.log("Please provide an email");

}

/***
 * Truthy values in JavaScript:
 * 1. true
 * 2. Non-zero numbers (e.g., 1, -1, 3.14)
 * 3. Non-empty strings (e.g., "hello", "0", "false")
 * 4. Objects (e.g., {}, [])
 * 5. Functions
 * 6. BigInt (non-zero)
 * 7. Symbol
 
 * False Value in JavaScript:
 * 1. false
 * 2. 0
 * 3. "" (empty string)
 * 4. null
 * 5. undefined
 * 6. NaN (Not a Number)
 * 7. BigInt 0n
  
  
 '0' - truthy value
 'false' - truthy value
 ' ' (space) - truthy value
 function(){} - truthy value 

 */

const obj={}
if(Object.keys(obj).length==0){
    console.log('Empty Object ');   
}
const arr=[]
if(arr.length==0){
    console.log('Empty Array ');   
}


//  Nulish Coalescing Operator (??)  null & undefined

let value1;
value1=5??10
console.log(value1); // Output: 5

value1=null??10
console.log(value1); // Output: 10

value1=undefined??10
console.log(value1); // Output: 10

// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05; // 10% discount for members, 5% for non-members
console.log("Discount: " + (discount * 100) + "%");
// Nested ternary operator
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
            
console.log("Grade: " + grade); 
