// ---------Loops In JavaScript----------------

// 1. For Loop
  for (let index = 0; index <=10; index++) {
    if (index === 5) {
    // console.log( index +" is best Number"); 
  }
}


for (let i = 1; i <= 10; i++) {
  for(let j = 1; j <= 10; j++){
    // console.log(`${i} * ${j} =${j*i} `); 
  }
}

let table = 7;
for (let i = 1; i <= 10; i++) {
  // console.log(`${table} * ${i} = ${table * i}`);
}


let arr=["Harry","Rohan","Shubham","Anjali"];
for (let i = 0; i < arr.length; i++) {
  //  console.log("Hello " + arr[i]);
}

// Key Words Break and Continue
for (let i = 1; i <= 10; i++) {
  if (i===5) {
    break;
    // continue;
  }
   console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i%2!=0) {
    continue;
  }
   console.log(i);
}

// 2. While Loop
let j=1;
while (j<=10) {
  console.log(j);
  j++;
}

let arra=["Harry","Rohan","Shubham","Anjali"];
let a=0;
while (a<arra.length) {
  console.log("Hello " + arra[a]);
  a++;
}


// 3. Do-While Loop
j=1
do{
  console.log(j);
  j=j+2;
} while (j<=10);

/**
 * do while loops one time loops will be executed 
 */

let score=1;
do {
  console.log("Your Score is " + score);
  score++;
} while (score<=10);




