// ---------Loops In JavaScript----------------

// 1. For Loop
for (let index = 0; index <= 10; index++) {
  if (index === 5) {
    // console.log( index +" is best Number");
  }
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} =${j*i} `);
  }
}

let table = 7;
for (let i = 1; i <= 10; i++) {
  // console.log(`${table} * ${i} = ${table * i}`);
}

let arr = ["Harry", "Rohan", "Shubham", "Anjali"];
for (let i = 0; i < arr.length; i++) {
  //  console.log("Hello " + arr[i]);
}

// Key Words Break and Continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
    // continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

// 2. While Loop
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

let arra = ["Harry", "Rohan", "Shubham", "Anjali"];
let a = 0;
while (a < arra.length) {
  console.log("Hello " + arra[a]);
  a++;
}

// 3. Do-While Loop
j = 1;
do {
  console.log(j);
  j = j + 2;
} while (j <= 10);

/**
 * do while loops one time loops will be executed
 */

let score = 1;
do {
  console.log("Your Score is " + score);
  score++;
} while (score <= 10);

// for of loop-
// for...of loop iterates over the values of an iterable object like an array or string
let myarr = [1, 2, 3, 4, 5, 6];

for (const val of myarr) {
  console.log(val);
}

let greet = "Good Morning";
for (const char of greet) {
  console.log(char);
}

//  for in loop- to iterate over objects
// for...in loop iterates over the keys
const userInfo = {
  name: "Harry",
  age: 22,
  type: "Programmer",
  os: "Windows",
};

for (const key in userInfo) {
  if (!Object.hasOwn(userInfo, key)) continue; // this will check key is present in object or not

  console.log(`The ${key} of object is ${userInfo[key]}`);
}

// Map  data type in js  stored in unique key value pairs
const map = new Map();
map.set("name", "Harry");
map.set("age", 22);
map.set("type", "Programmer");
map.set("os", "Windows");
map.set("pk", "Pakistan");
map.set("ind", "India");

// for of loop with map
for (const [key, value] of map) {
  console.log(`The ${key} of map is ${value}`);
}

// can we use the for in loop with arrays
const myArray = ["Harry", "Rohan", "Shubham", "Anjali"];

for (const key in myArray) {
  console.log(`The element at index ${key} is ${myArray[key]}`);
}

// forEach loop
// The forEach() method executes a provided function once for each array element.

const arr1 = ["Harry", "Rohan", "Shubham", "heryy"];
arr1.forEach((item) => {
  console.log(`Hello ${item}`);
});

arr1.forEach((item, index) => {
  console.log(`Hello ${item} your index is ${index}`);
});

let coding = ["Python", "JavaScript", "C++", "Java", "Ruby"];
coding.forEach((item, index, arr) => {
  console.log(`Hello ${item} your index is ${index}`);
  //  console.log(arr);
});

let mycodingLanguages = [
  {
    language: "Python",
    extension: ".py",
  },
  {
    language: "JavaScript",
    extension: ".js",
  },
  {
    language: "C++",
    extension: ".cpp",
  },
  {
    language: "Java",
    extension: ".java",
  },
];

mycodingLanguages.forEach((item) => {
  console.log(item.language);
});

// filter 
const nums=[1,2,3,4,5,6,7,8,9,10];

const newNums=nums.filter((num)=>num>5)

let newArray=[];
nums.forEach((num)=>{
 if(num>0){
    newArray.push(num);
 } 
 console.log(newArray.toString());   

})


