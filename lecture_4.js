// -------------------- Objects In Js ------------------------
/**
 * Objects are mutable  and dynamic in nature
 * Objects are reference type
 * Objects store data in key value pair
 * In objects keys are always string or symbol
 * In objects we can access values by using dot notation or bracket notation
 * In objects we can add new key value pair as well as delete existing key value pair
 * In objects we can iterate through keys and values by using for in loop
 */
const symbol = Symbol("mysymbol");

const jsUser = {
  name: "Muhammad Khan",
  age: 22,
  location: "Pakistan",
  email: "muhammad@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
  [symbol]: "mySymbolValue",
};

console.log(Object.keys(jsUser));
console.log(jsUser["name"]);
console.log(jsUser.age);
console.log(jsUser[symbol]);
// freezing an object then changes will not be propagated
// Object.freeze(jsUser);
jsUser.age = 23; // will not work

jsUser.greeting = function () {
  console.log("Hello JS User");
};

console.log(jsUser.greeting());

console.log(jsUser);

jsUser.greeting2 = function () {
  console.log(`Hello ${this.name}  Welcome to JS course`);
};

console.log(jsUser.greeting2());

// Objects using Singleton

const tinderUser = new Object();
// const tinderUser={};
tinderUser.name = "Khan";
tinderUser.age = 22;
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Muhammad",
      lastName: "Khan",
    },
  },
};

console.log(regularUser["fullName"]["userFullName"]["firstName"]);
console.log(regularUser.fullName.userFullName.firstName);

console.log(regularUser?.fullName?.userFullName?.firstName);

const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2); // return modified object

console.log(obj3["1"]);
console.log(obj4);

// Nested Object Destructuring

const myObj = {
  myName: "Khan",
  myAge: 22,
  myLocation: "Pakistan",
  myEducation: {
    degree: "BESW",
    institute: "MUET",
    year: 2026,
    additionalCourses: {
      course1: "Web Development",
      course2: "Data Science",
    },
  },
};

console.log(myObj.myEducation.additionalCourses.course1);

// array of objects

const users = [
  { userId: 1, userName: "Muhammad Khan" },
  { userId: 2, userName: "Ali Muhammad" },
  { userId: 3, userName: "Ahmed Khan" },
];

console.log(users[0].userName);

for (const user of users){
   console.log(`UserId: ${user.userId}, UserName: ${user.userName}`);
}

console.log(Object.keys(users)); // type : Array
console.log(Object.values(users)); // type : Array
console.log(Object.entries(users)); // type : Array of Arrays

console.log(users.hasOwnProperty("userId"));
console.log(users[0].hasOwnProperty("userId"));


// ---------------------Objects destructuring and JSON API----------------

const course={
    coursename:"Js In Hindhi",
    coursePrice:11000,
}

const {coursename,coursePrice}=course;

// Api JSON OUTPUT EXAMPLE
/*

{
    "name": "Muhammad Khan",
    "age": 22,
    "location": "Pakistan"

} 
    */

// Json JavaScript Object Notation

const userJson= `{
    "name": "Muhammad Khan",
    "age": 22,
    "location": "Pakistan"
}`;

// Converting JSON to JavaScript Object
const userObj= JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);

// JSON Formatter tool
